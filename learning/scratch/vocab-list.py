import json
data = '[{"word": "neko", "seen": 3}, {"word": "inu", "seen": 1}, {"word": "tori", "seen": 5}]'
lst = json.loads(data)
print(len(lst))
print(lst[2]["word"])
print(lst[0]["seen"])