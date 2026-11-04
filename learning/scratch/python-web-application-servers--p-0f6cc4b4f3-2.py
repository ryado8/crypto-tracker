from fastapi import FastAPI
from fastapi.testclient import TestClient

app = FastAPI()

@app.get("/books/current")
def books_current():
    return {"To Kill a Mockingbird": 128}

@app.get("/books/finished")
def finished_books():
    return {"books_finished": 100}

client = TestClient(app)
resp1 = client.get("/books/current")
print(resp1.json())
resp2 = client.get("/books/finished")
print(resp2.json())