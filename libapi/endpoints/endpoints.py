import json
import requests
#from ..access.access_token import load_access_token


'''
albums, artist, singles
'''

# {'error': {'status': 401, 'message': 'The access token expired'}} access token expired error

def extract_access_token() -> str:
    access_token_path = "../access_token.json"
    json_data = None
    with open(access_token_path, 'r') as file:
        json_data = json.load(file)
        if json_data.get("expired") != None:
            return None
    return json_data["access_token"]


def search_for_artist(artist_name, limit=1):
    URL = f'https://api.spotify.com/v1/search?q={artist_name}&type=artist&limit={limit}'
    access_token = extract_access_token()
    if not access_token:
        raise Exception("Access token not found")
    params = {'q': artist_name}
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    res = requests.get(URL, headers=headers, params=params)
    print(res.json())
    return res.json() if res else None


def search_for_albums(album_name, limit=1):
    URL = f'https://api.spotify.com/v1/search?q={album_name}&type=album&limit={limit}'
    access_token = extract_access_token()
    if not access_token:
        raise Exception("Access token not found")
    params = {'q': album_name}
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    res = requests.get(URL, headers=headers, params=params)
    return res.json() if res else None

while True:
    _type = str(input("Enter album or artist: "))
    if _type.lower() == "artist":
        artist_name = str(input("Enter artist name:"))
        response = search_for_artist(artist_name)
        if response:
            print(json.dumps(response["artists"]["items"], indent=4))
        
    elif _type.lower() == "album":
        album_name = str(input("Enter album name:"))
        response = search_for_albums(album_name)
        if response:
            print(json.dumps(response["albums"]["items"], indent=4))
    elif _type.lower() == "exit":
        break
    else:
        continue

    








