from dataclasses import dataclass

@dataclass
class Flashcard:
    front: str
    back: str
    id: int | None = None

dog = Flashcard(front="inu", back="dog")
print(dog.id)
dog.id = 7
print(dog)
