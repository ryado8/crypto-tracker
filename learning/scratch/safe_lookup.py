prices_dict = {"btc": {"USD": 45000}, "ltc": {"USD": 150}}

def check_coin(dict, id):
    try:
        return dict[id]["USD"]
    except KeyError as e:
        print(f"{id} is missing")
        return None

print(check_coin(prices_dict, "ltc"))
print(check_coin(prices_dict, "false"))
        