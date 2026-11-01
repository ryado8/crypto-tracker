import httpx

response = httpx.get(
    "https://api.coingecko.com/api/v3/search",
    params={"query": "ltc"},   # httpx builds ?query=shiba onto the address for you
    timeout=10,                    # give up after 10 seconds instead of hanging forever
)
print(response.status_code)        # 200 means it worked
data = response.json()             # the shortcut for json.loads(response.text)
print(len(data["coins"]))    # first search result's name