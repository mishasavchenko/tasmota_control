import requests
import time
off = requests.get('http://10.0.0.70/cm?cmnd=Power%20Off')
time.sleep(1)

on = requests.get('http://10.0.0.70/cm?cmnd=Power%20On')
print type(on)
time.sleep(1)

# purple = requests.get('http://10.0.0.70/cm?cmnd=Color%20902A9C')
# time.sleep(1)
# red = requests.get('http://10.0.0.70/cm?cmnd=Color%20FF0000')
# time.sleep(1)
# green = requests.get('http://10.0.0.70/cm?cmnd=Color%200000FF')
# time.sleep(1)
# blue = requests.get('http://10.0.0.70/cm?cmnd=Color%2000FF00')
# time.sleep(1)
# white = requests.get('http://10.0.0.70/cm?cmnd=Color%20FFFFFF')
