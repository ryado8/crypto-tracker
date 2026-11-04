import time

total = 0

def handle_request():
  global total
  total += 1
  print(f"handled {total}")

while True:
  handle_request()
  time.sleep(0.5)