import json
temps = '{"tokyo": {"temp_c": 18}, "osaka": {"temp_c": 21.5}}'
temps = json.loads(temps)
osaka_temp = temps["osaka"]["temp_c"]
print(osaka_temp)
print(type(osaka_temp))