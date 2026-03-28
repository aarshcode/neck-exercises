from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import os

app = FastAPI()

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
        CREATE TABLE IF NOT EXISTS completions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            exercise_id INTEGER NOT NULL,
            exercise_name TEXT NOT NULL,
            completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    conn.close()


init_db()


class LogRequest(BaseModel):
    user_id: str
    exercise_id: int
    exercise_name: str


@app.post("/api/log")
def log_completion(body: LogRequest):
    conn = get_db()
    conn.execute(
        "INSERT INTO completions (user_id, exercise_id, exercise_name) VALUES (?, ?, ?)",
        (body.user_id, body.exercise_id, body.exercise_name),
    )
    conn.commit()
    conn.close()
    return {"status": "ok"}


@app.get("/api/stats/{user_id}")
def get_stats(user_id: str):
    conn = get_db()

    # Total completions per exercise (all time)
    rows = conn.execute(
        """
        SELECT exercise_id, exercise_name, COUNT(*) as total
        FROM completions
        WHERE user_id = ?
        GROUP BY exercise_id, exercise_name
        """,
        (user_id,),
    ).fetchall()

    # Today's completions per exercise
    today_rows = conn.execute(
        """
        SELECT exercise_id, COUNT(*) as count
        FROM completions
        WHERE user_id = ? AND DATE(completed_at) = DATE('now')
        GROUP BY exercise_id
        """,
        (user_id,),
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

    return {"user_id": user_id, "stats": stats}
