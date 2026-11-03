from dataclasses import dataclass

@dataclass
class TutorLesson:
    topic: str
    minutes: int = 60

lesson1 = TutorLesson(topic="keigo", minutes=45)
lesson2 = TutorLesson(topic="particles")

print(lesson1)
print(lesson2)
print(lesson1.minutes + lesson2.minutes)
