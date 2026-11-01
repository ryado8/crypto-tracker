import urllib.request

url = "https://api.coingecko.com/api/v3/not-a-real-page"
resp = urllib.request.urlopen(url)
print(resp.status)