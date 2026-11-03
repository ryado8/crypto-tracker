from datetime import datetime, timezone
from zoneinfo import ZoneInfo

last_study = datetime.fromisoformat("2026-11-03T20:40:00+00:00")
ny_study = last_study.astimezone(ZoneInfo("America/New_York"))

print(ny_study.strftime("%a %d %b, %H:%M (%z)"))