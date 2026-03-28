from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
import psycopg2
import psycopg2.extras
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

DATABASE_URL = os.environ.get("DATABASE_URL")


def get_db():
    conn = psycopg2.connect(DATABASE_URL)
    return conn


def init_db():
    conn = get_db()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            name TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS completions (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id),
            exercise_id INTEGER NOT NULL,
            exercise_name TEXT NOT NULL,
            completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    cur.close()
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
    cur = conn.cursor()
    try:
        cur.execute(
            "INSERT INTO users (email, name, password_hash) VALUES (%s, %s, %s) RETURNING id",
            (body.email.lower().strip(), body.name.strip(), password_hash),
        )
        user_id = cur.fetchone()[0]
        conn.commit()
    except psycopg2.errors.UniqueViolation:
        conn.rollback()
        cur.close()
        conn.close()
        raise HTTPException(status_code=400, detail="Email already registered")
    cur.close()
    conn.close()
    token = create_token(user_id, body.email.lower().strip(), body.name.strip())
    return {
        "token": token,
        "user": {"id": user_id, "email": body.email.lower().strip(), "name": body.name.strip()},
    }


@app.post("/api/login")
def login(body: LoginRequest):
    conn = get_db()
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cur.execute("SELECT * FROM users WHERE email = %s", (body.email.lower().strip(),))
    user = cur.fetchone()
    cur.close()
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
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO completions (user_id, exercise_id, exercise_name) VALUES (%s, %s, %s)",
        (user["id"], body.exercise_id, body.exercise_name),
    )
    conn.commit()
    cur.close()
    conn.close()
    return {"status": "ok"}


@app.get("/api/stats")
def get_stats(user=Depends(get_current_user)):
    conn = get_db()
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cur.execute(
        """
        SELECT exercise_id, exercise_name, COUNT(*) as total
        FROM completions WHERE user_id = %s
        GROUP BY exercise_id, exercise_name
        """,
        (user["id"],),
    )
    rows = cur.fetchall()
    cur.execute(
        """
        SELECT exercise_id, COUNT(*) as count
        FROM completions
        WHERE user_id = %s AND completed_at::date = CURRENT_DATE
        GROUP BY exercise_id
        """,
        (user["id"],),
    )
    today_rows = cur.fetchall()
    cur.close()
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
