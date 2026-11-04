from fastapi import FastAPI
from fastapi.testclient import TestClient

app = FastAPI()

@app.get("/books/current")
def books_current():
    return {"To Kill a Mockingbird", 128}

client = TestClient(app)
response = client.get("/books/current")
print(response.status_code)
print(response.json())