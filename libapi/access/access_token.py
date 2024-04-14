import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent.parent.parent))

import requests
import base64
import json
import os
from libapi.query.query_builder import QueryBuilder

ACCESS_TOKEN_URL="https://accounts.spotify.com/api/token"
CLIENT_ID='a7353c7122b24f96934f9594512e57fe'
CLENT_SECRET='361a0aeed4164b26afcdc690e890d8eb'

### pass path to folder with access_token.json
def check_expiration(path='.\\') -> bool:
    ACCESS_TOKEN = extract_access_token(path)
    ### if token file does not exist, return true to indicate expiration
    if ACCESS_TOKEN == None:
        return True
    URL = f'https://api.spotify.com/v1/search'
    response = QueryBuilder(URL)\
        .add_header("Authorization", f'Bearer {ACCESS_TOKEN}')\
        .add_header("User-Agent", "BoomBox/1.0",)\
        .add_header("Content-Type", "application/x-www-form-urlencoded",)\
        .add_params("q", "travis scott")\
        .add_params("type", "artist")\
        .make_get_request()
    
    response = response.json()
    if 'error' in response and response['error']['status'] == 401:
        return True
    return False


### return response with access_token
def generate_access_token():
    client_credentials = base64.b64encode(str.encode(CLIENT_ID + ":" + CLENT_SECRET))\
        .decode('utf-8')
    HEADERS = {
        "User-Agent": "BoomBox/1.0",
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": f'Basic {client_credentials}',
    }
    DATA = { "grant_type": "client_credentials" }
    response = requests.post(ACCESS_TOKEN_URL, data=DATA, headers=HEADERS)
    return response.json() if response else None

def load_access_token(path='.\\'):
    print(f'path: {path}access_token.json')
    with open(f'{path}access_token.json', 'w') as json_file:
        pass

    with open(f'{path}access_token.json', 'w') as json_file:
        token = generate_access_token()
        json_file.write(json.dumps(token, indent=4))

def extract_access_token(path='\\') -> str|None:
    if not Path(f'{path}access_token.json').is_file():
        return None

    access_token_path = f"{path}access_token.json"
    json_data = None
    with open(access_token_path, 'r') as file:
        json_data = json.load(file)
        if json_data.get("expired") != None:
            return None
    return json_data["access_token"]

