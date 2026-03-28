from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
import sqlite3
import os
import bcrypt
import jwt
from datetime import datetime, timedelta, timezone

app = FastAPI()
security = HTTPBearer()

JWT_SECRET = os.environ.get("JWT_SECRET", "change-this-in-production")
JWT_ALGORITHM = "HS256"
JWT_EXPIRY_DAYS = 30

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = os.environ.get("DB_PATH", "data.db")


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            name TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS completions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            exercise_id INTEGER NOT NULL,
            exercise_name TEXT NOT NULL,
            completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    """)
    conn.commit()
    conn.close()


init_db()


def create_token(user_id: int, email: str, name: str) -> str:
    payload = {
        "sub": str(user_id),
        "email": email,
        "name": name,
        "exp": datetime.now(timezone.utc) + timedelta(days=JWT_EXPIRY_DAYS),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(
            credentials.credentials, JWT_SECRET, algorithms=[JWT_ALGORITHM]
        )
        return {
            "id": int(payload["sub"]),
            "email": payload["email"],
            "name": payload["name"],
        }
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


class RegisterRequest(BaseModel):
    email: str
    name: str
    password: str


class LoginRequest(BaseModel):
    email: str
    password: str


class LogRequest(BaseModel):
    exercise_id: int
    exercise_name: str


@app.post("/api/register")
def register(body: RegisterRequest):
    password_hash = bcrypt.hashpw(body.password.encode(), bcrypt.gensalt()).decode()
    conn = get_db()
    try:
        cursor = conn.execute(
            "INSERT INTO users (email, name, password_hash) VALUES (?, ?, ?)",
            (body.email.lower().strip(), body.name.strip(), password_hash),
        )
        user_id = cursor.lastrowid
        conn.commit()
    except sqlite3.IntegrityError:
        conn.close()
        raise HTTPException(status_code=400, detail="Email already registered")
    conn.close()
    token = create_token(user_id, body.email.lower().strip(), body.name.strip())
    return {
        "token": token,
        "user": {"id": user_id, "email": body.email.lower().strip(), "name": body.name.strip()},
    }


@app.post("/api/login")
def login(body: LoginRequest):
    conn = get_db()
    user = conn.execute(
        "SELECT * FROM users WHERE email = ?", (body.email.lower().strip(),)
    ).fetchone()
    conn.close()
    if not user or not bcrypt.checkpw(body.password.encode(), user["password_hash"].encode()):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_token(user["id"], user["email"], user["name"])
    return {
        "token": token,
        "user": {"id": user["id"], "email": user["email"], "name": user["name"]},
    }


@app.post("/api/log")
def log_completion(body: LogRequest, user=Depends(get_current_user)):
    conn = get_db()
    conn.execute(
        "INSERT INTO completions (user_id, exercise_id, exercise_name) VALUES (?, ?, ?)",
        (user["id"], body.exercise_id, body.exercise_name),
    )
    conn.commit()
    conn.close()
    return {"status": "ok"}


@app.get("/api/stats")
def get_stats(user=Depends(get_current_user)):
    conn = get_db()
    rows = conn.execute(
        """
        SELECT exercise_id, exercise_name, COUNT(*) as total
        FROM completions WHERE user_id = ?
        GROUP BY exercise_id, exercise_name
        """,
        (user["id"],),
    ).fetchall()
    today_rows = conn.execute(
        """
        SELECT exercise_id, COUNT(*) as count
        FROM completions
        WHERE user_id = ? AND DATE(completed_at) = DATE('now')
        GROUP BY exercise_id
        """,
        (user["id"],),
    ).fetchall()
    conn.close()
    today_map = {r["exercise_id"]: r["count"] for r in today_rows}
    stats = [
        {
            "exercise_id": r["exercise_id"],
            "exercise_name": r["exercise_name"],
            "total": r["total"],
            "today": today_map.get(r["exercise_id"], 0),
        }
        for r in rows
    ]
    return {"user": user, "stats": stats}
