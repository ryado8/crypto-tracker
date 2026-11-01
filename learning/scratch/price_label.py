def label(price, currency="USD"):
    return f"{price} {currency}"

usd = label(50)
jpy = label(50, "JPY")

print(usd)
print(jpy)