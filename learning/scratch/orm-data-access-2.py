from sqlmodel import Field, Session, SQLModel, create_engine
import os

class StudyDay(SQLModel, table=True):
    __tablename__ = 'study_minutes'
    id: int | None = Field(default=None, primary_key=True)
    day: str
    minutes: int

engine = create_engine(os.environ.get("DATABASE_URL"), echo=True)

with Session(engine) as session:
    study_day = session.get(StudyDay, 1)
    study_day.minutes = 90
    session.commit()
    session.refresh(study_day)
    print(study_day)