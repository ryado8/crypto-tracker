from fastapi import FastAPI
from fastapi.testclient import TestClient
from decimal import Decimal
from datetime import date

app = FastAPI()

def lesson_list():
    return [{"topic": "Pronounciation", "held_on": date(2026,10,5), "cost": Decimal("23.38")},
            {"topic": "Conversation", "held_on": date(2026,8,8), "cost": Decimal("15.88")}]

@app.get("/api/lessons")
def lessons():
    return lesson_list()

client = TestClient(app)
response = client.get("/api/lessons")
print(response.text)