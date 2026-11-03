from sqlmodel import Field, Session, SQLModel, create_engine
import os

class StudyDay(SQLModel, table=True):
    __tablename__ = 'study_minutes'
    id: int | None = Field(default=None, primary_key=True)
    day: str
    minutes: int

engine = create_engine(os.environ.get("DATABASE_URL"), echo=True)

with Session(engine) as session:
    study_day = StudyDay(day="Wednesday", minutes=25)
    session.add(study_day)

    print(study_day)
