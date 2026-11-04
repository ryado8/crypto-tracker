from fastapi import FastAPI
from fastapi.testclient import TestClient

app = FastAPI()

def deck_list():
    return [{"name": "jp", "cards": 100}, {"name": "kr", "cards": 50}]

@app.get("/api/decks")
def decks():
    return deck_list()

@app.get("/api/decks/count")
def deck_count():
    decks = deck_list()
    return {"count": len(decks)}

client = TestClient(app)
resp1 = client.get("/api/decks")
print(resp1.status_code, resp1.json())
resp2 = client.get("/api/decks/count")
print(resp2.status_code, resp2.json())
resp3 = client.get("/api/deck")
print(resp3.status_code, resp3.json())