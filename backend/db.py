"""Tripwire's database: the readings table as a Python class, and saving one reading."""

import os
from datetime import datetime
from decimal import Decimal

from sqlmodel import Field, Session, SQLModel, create_engine


class Reading(SQLModel, table=True):
    __tablename__ = "readings"
    id: int | None = Field(default=None, primary_key=True)
    coin_id: str
    price: Decimal
    created_at: datetime


engine = create_engine(os.environ["DATABASE_URL"], echo=True)


def save_readings(data: dict, fetched_at: datetime) -> list[Reading]:
    with Session(engine) as session:
        readings = []
        for coin in data:
            reading = Reading(coin_id=coin, price=Decimal(str(data[coin]["usd"])), created_at=fetched_at)
            session.add(reading)
            readings.append(reading)
        session.commit()

        for reading in readings:
            session.refresh(reading)

    return readings