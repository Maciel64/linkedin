import time

def print_time (func) :
  now = time.time()
  func()
  print(f'Time taken {time.time() - now}')

@print_time
def do_something () :
  print('Before done..........')
  time.sleep(1.5)
  print('After done..........')