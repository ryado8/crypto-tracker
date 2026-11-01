import urllib.request
url = "https://api.coingecko.com/api/v3/ping"
resp = urllib.request.urlopen(url)
print(resp.status)