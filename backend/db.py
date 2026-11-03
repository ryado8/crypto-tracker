"""Tripwire's database: the readings table as a Python class, and saving one reading."""

import os
from decimal import Decimal

from sqlmodel import Field, Session, SQLModel, create_engine


class Reading(SQLModel, table=True):
    __tablename__ = "readings"
    id: int | None = Field(default=None, primary_key=True)
    coin_id: str
    price: Decimal


engine = create_engine(os.environ["DATABASE_URL"], echo=True)


def save_reading(coin_id: str, price: Decimal) -> Reading:
    """Insert one reading for coin_id at price and return it, with its new id."""
    with Session(engine) as session:
        reading = Reading(coin_id=coin_id, price=price)
        session.add(reading)
        session.commit()
        session.refresh(reading)

    return reading


if __name__ == "__main__":
    reading = save_reading("bitcoin", Decimal("60000.50"))
    print(reading)
