import json
coin = '{"symbol": "ETH", "listed": true, "max_supply": null, "rank": 2}'
print(type(coin))
coin = json.loads(coin)
print(type(coin))
print(coin["max_supply"])