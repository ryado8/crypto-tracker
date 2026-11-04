from fastapi import FastAPI
from fastapi.testclient import TestClient

app = FastAPI()

@app.get("/books/current")
def books_current():
    return {"current_book": 128}

client = TestClient(app)
response = client.post("/books/current")
print(response.status_code)
print(response.json())