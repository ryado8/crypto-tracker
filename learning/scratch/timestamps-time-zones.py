from datetime import datetime, timezone
from zoneinfo import ZoneInfo

lesson_tokyo = datetime(2026, 11, 7, 9, 0, tzinfo=ZoneInfo("Asia/Tokyo"))
lesson_utc = lesson_tokyo.astimezone(timezone.utc)
lesson_ny = lesson_tokyo.astimezone(ZoneInfo("America/New_York"))
print(lesson_tokyo, lesson_utc, lesson_ny)