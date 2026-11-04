import time

reviews = 0
def handle_review():  
  global reviews
  reviews += 1
  print(f"reviews so far: {reviews}")

while reviews < 3:
  handle_review()
  time.sleep(1)