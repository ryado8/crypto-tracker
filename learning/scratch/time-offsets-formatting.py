from datetime import datetime

next_lesson = datetime.fromisoformat("2026-11-07T09:00:00+09:00")
calendar_lesson = datetime.fromisoformat("2026-11-06T19:00:00-05:00")

print(next_lesson.utcoffset(), calendar_lesson.utcoffset(),
next_lesson == calendar_lesson)