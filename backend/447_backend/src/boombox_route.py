import sys
from pathlib import Path

LIBAPI_FP = str(Path(__file__).parent.parent.parent.parent)
sys.path.append(LIBAPI_FP)

from flask import Blueprint, Flask, request, jsonify, make_response, Response
from libapi.query.query_builder import QueryBuilder
from libapi.access import access_token
from boombox import app, database


# access token for spotify web
def _get_valid_access_token():
    PATH_TO_TOKEN = LIBAPI_FP + '/libapi/access/'
    if access_token.check_expiration(path=PATH_TO_TOKEN):
        access_token.load_access_token(path=PATH_TO_TOKEN)
    ACCESS_TOKEN = access_token.extract_access_token(path=PATH_TO_TOKEN)
    return ACCESS_TOKEN


SPOTIFY_ACCESS_TOKEN = _get_valid_access_token()


app.route("/get_singles_db", methods=["GET"])
def app_get_singles_db():
    data = request.get_json()
    single_name = data["single_name"]

    single_table = database.get_table("single")

    if single_table == None:
        return jsonify(result=[None]) # TODO: make it better
    
    singles = single_table.get_all("`single_name`", single_name)
    results = []

    for single in singles:
        results.append(single)

    return jsonify(result=results)


app.route("/get_artists_db", methods=["GET"])
def app_get_artists_db():
    data = request.get_json()
    artist_name = data["artist_name"]

    artist_table = database.get_table("artist")

    if artist_table == None:
        return jsonify(result=[None]) # TODO: something more useful here
    
    artists = artist_table.get_all("`artist_name`", artist_name)
    results = []

    for artist in artists:
        results.append(artist)

    return jsonify(result=results)
        

app.route("/get_artists_spotify", methods=["GET"])
def app_get_artists_spotify():
    data = request.get_json()
    artist_name = data["artist_name"]
    limit = data["limit"]

    query = QueryBuilder(url='https://api.spotify.com/v1/search')
    get_request_response = query.add_params("q", artist_name)\
        .add_params("type", "artist")\
        .add_header("Authorization", SPOTIFY_ACCESS_TOKEN)\
        .add_header("User-Agent", "Boombox\\V1")\
        .add_params("limit", f"{limit}")\
        .make_get_request()
    
    if get_request_response.status_code != 200:
        return jsonify(result=[None])
    
    json = get_request_response.json()
    results = []

    for artist in json["items"]:
        items = []
        items.append(artist["name"])
        
        if len(artist["images"]) > 0:
            items.append(artist["images"][0]["url"]) # grab first image url

        items.append(artist["id"]) # spotify uid

        results.append[items]
    
    return jsonify(result=results)


app.route("/get_tracks_spotify", methods=["GET"])
def app_get_tracks_spotify():
    data = request.get_json()
    single_name = data["single_name"]
    limit = data["limit"]
    
    query = QueryBuilder(url='https://api.spotify.com/v1/search')
    get_request_response = query.add_params("q", single_name)\
        .add_params("type", "track")\
        .add_header("Authorization", SPOTIFY_ACCESS_TOKEN)\
        .add_header("User-Agent", "Boombox\\V1")\
        .add_params("limit", f"{limit}")\
        .make_get_request()
    
    if get_request_response.status_code != 200:
        return jsonify(result=[None])
    
    json = get_request_response.json()
    results = []

    for track in json["items"]:
        items = []
        items.append(track["name"])
        items.append(track["album"]["album_type"])
        items.append(track["album"]["name"])
        #items.append(track["artist"])
        items.append(track["id"]) # spotify uid
        results.append[items]
    
    return jsonify(result=results)