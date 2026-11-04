"""Tripwire's web service: the FastAPI app that will answer the React page."""

from fastapi import FastAPI

from db import list_targets

app = FastAPI()

@app.get("/api/health")
def api_health():
    return {"service": "up"}

@app.get("/api/targets")
def targets():
    return list_targets()