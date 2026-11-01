import httpx

try:
    response = httpx.get(
        "https://api.coingecko.com/api/v3/not-a-real-page",
        params={"query": "ltc"},
        timeout=10,
    )

    print(response.status_code)
    response.raise_for_status()
    data = response.json()
except Exception:
    print("done")