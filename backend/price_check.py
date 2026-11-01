"""Fetch the current USD price of each coin you track from CoinGecko."""

import httpx

coins = ['bitcoin', 'ethereum', 'solana', 'dogecoin']

target = {"coin": "bitcoin", "direction": "above", "price": 120000}

def fetch_prices(coin_ids):
    coin_list_str = ','.join(coin_ids)
    response = httpx.get(
        "https://api.coingecko.com/api/v3/simple/price",
        params={"ids": coin_list_str, "vs_currencies": "USD"},
        timeout=10
    )

    response.raise_for_status()
    return response.json()

def display_prices(data):
    for coin in data:
        print(f"{coin}: ${data[coin]["usd"]:,.4f}")

def target_hit(price, direction, target_price):
    """Return True once price has reached the target. Landing exactly on it counts."""
    if direction == "above":
        return price >= target_price
    elif direction == "below":
        return price <= target_price
    else:
        raise ValueError(f"direction must be 'above' or 'below', not {direction!r}")

def report_target(data, target):
    coin = target["coin"]
    direction = target["direction"]
    target_price = target["price"]

    current_price = data[coin]["usd"]
    hit = target_hit(current_price, direction, target_price)
    status = "HIT" if hit else "waiting"

    print(f"{coin} {direction} ${target_price:,}: {status} (now ${current_price:,.2f})")

if __name__ == "__main__":
    try:
        coin_data = fetch_prices(coins)
        display_prices(coin_data)
        report_target(coin_data, target)
    except httpx.HTTPError as e:
        print(f"{e}: Price source can't be reached.")
    except ValueError:
        print("The answer wasn't valid JSON")