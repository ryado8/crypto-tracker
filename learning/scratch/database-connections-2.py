from datetime import date
from sqlmodel import Field, Session, SQLModel, create_engine, select

class VocabCard(SQLModel, table=True):
    __tablename__ = "vocab_cards"
    id: int | None = Field(default=None, primary_key=True)
    word: str
    times_reviewed: int
    due_date: date

engine = create_engine("postgresql+psycopg:///scratchh")
print("engine ready")

with Session(engine) as session:
    words_due = session.exec(select(VocabCard).where(VocabCard.due_date <= date.today())).all()

print("query done")