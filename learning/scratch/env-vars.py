import os

minutes = os.environ.get("DAILY_MINUTES", "30")
print(f"{int(minutes) * 7}")