from datetime import datetime, timezone
from zoneinfo import ZoneInfo

review_time = datetime(2026, 11, 7, 8, 30)
lesson_time = datetime(2026, 11, 7, 9, 00, tzinfo=ZoneInfo("Asia/Tokyo"))

print(review_time < lesson_time)