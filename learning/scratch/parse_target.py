def price_to_float(target_price):
    try:
        return float(target_price)
    except ValueError as e:
        print(f"{target_price} is not a float type.")
        return None

print(price_to_float("120000"))
print(price_to_float("120k"))