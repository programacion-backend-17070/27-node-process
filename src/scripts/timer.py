#!/usr/bin/python3

import time

print("soy el tiempo")
i = 10
while i > 0:
  print(time.ctime())
  i -= 1
  time.sleep(1)