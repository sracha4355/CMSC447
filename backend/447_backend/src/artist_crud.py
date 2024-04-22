import sys
from pathlib import Path

LIBAPI_FP = str(Path(__file__).parent.parent.parent.parent)
sys.path.append(LIBAPI_FP)


from flask import Blueprint, request, Response, make_response, jsonify
from libapi.query.query_builder import QueryBuilder
from spotify_token import SPOTIFY_ACCESS_TOKEN
#from responses import build_json_response, response_only_post_allowed, response_table_not_found, response_spotify_error, response_success
#from responses import build_json_response, RESPONSE_ONLY_POST_ALLOWED, RESPONSE_TABLE_NOT_FOUND, RESPONSE_SPOTIFY_ERROR, RESPONSE_SUCCESS
#from boombox import database

artist_blueprint = Blueprint("artist", __name__)


def create_artist(json) -> Response:
    artist_name = json["artist_name"]
    artist_picture = json["artist_picture"]
    spotify_uid = json["spotify_uid"]

    from boombox import database

    artist_table = database.get_table("artist")

    if artist_table == None:
        response = make_response(
            jsonify({"error":"table not found in database"}),
            500
        )
        response.headers["Content-Type"] = "application/json"
        return response
    
    columns = ["`artist_name`", "`artist_picture`", "`artist_boomscore`", "`spotify_uid`"]
    values = [f"\'{artist_name}\'", f"\'{artist_picture}\'", 0, f"\'{spotify_uid}\'"]
    artist_table.insert(columns, values)

    response = make_response(jsonify({"success":""}), 200)
    response.headers["Content-Type"] = "application/json"

    return response


def get_artists(json) -> Response:
    artist_name = json["artist_name"]

    from boombox import database

    artist_table = database.get_table("artist")

    if artist_table == None:
        response = make_response(
            jsonify({"error":"table not found in database"}),
            500
        )
        response.headers["Content-Type"] = "application/json"
        return response
    
    artists = artist_table.get_all("`artist_name`", artist_name)
    results = []

    for artist in artists:
        (artist_id, artist_name, artist_picture, artist_boomscore, spotify_uid) = artist
        results.append({
            "artist_id" : artist_id, 
            "artist_picture" : artist_picture, 
            "artist_boomscore" : artist_boomscore, 
            "spotify_uid" : spotify_uid
        })

    response = make_response(
        jsonify({"result":results}),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response
    

def delete_artist(json) -> Response:
    artist_id = json[artist_id]

    from boombox import database

    music_table = database.get_table("music")
    artist_table = database.get_table("artist")
    single_table = database.get_table("single")
    album_table = database.get_table("album")
    playlist_table = database.get_table("playlist")
    acct_playlist_music_table = database.get_table("acct_playlist_music")
    review_table = database.get_table("review")

    if music_table == None\
        or artist_table == None\
        or single_table == None\
        or album_table == None\
        or playlist_table == None\
        or acct_playlist_music_table == None\
        or review_table == None:
        response = make_response(
            jsonify({"error":"table not found in database"}),
            500
        )
        response.headers["Content-Type"] = "application/json"
        return response

    musics = music_table.get("`music_id`", "`artist_id`", artist_id)

    for (music_id,) in musics:
        # delete playlists
        playlists = acct_playlist_music_table.get("`playlist_id`", "`music_id`", music_id)

        for (playlist_id,) in playlists:
            playlist_table.delete("`playlist_id`", playlist_id)

        review_table.delete("`music_id`", music_id)

    album_table.delete("`artist_id`", artist_id)
    single_table.delete("`artist_id`", artist_id)
    artist_table.delete("`artist_id`", artist_id)

    response = make_response(jsonify({"success":""}), 200)
    response.headers["Content-Type"] = "application/json"

    return response



def get_artists_spotify(json) -> Response:
    artist_name = json["artist_name"]
    limit = json["limit"]

    query = QueryBuilder(url='https://api.spotify.com/v1/search')
    get_request_response = query.add_params("q", artist_name)\
        .add_params("type", "artist")\
        .add_header("Authorization", SPOTIFY_ACCESS_TOKEN)\
        .add_header("User-Agent", "Boombox\\V1")\
        .add_params("limit", f"{limit}")\
        .make_get_request()
    
    if get_request_response.status_code != 200:
        response = make_response(
            jsonify({"error":"spotify web api error"}),
            500
        )
        response.headers["Content-Type"] = "application/json"
        return response
    
    json = get_request_response.json()
    results = []

    for artist in json["items"]:
        items = {}
        items["artist_name"] = artist["name"]
        
        if len(artist["images"]) > 0:
            items["artist_picture"] = artist["images"][0]["url"]

        items.append(artist["id"]) # spotify uid
        items["spotify_uid"] = artist[id]

        results.append(items)

    response = make_response(
        jsonify({"result":results}),
        200
    )
    response.headers["Content-Type"] = "application/json"
    
    return response


@artist_blueprint.route("/create_artist", methods=["POST"])
def app_create_artist() -> Response:
    if request.method == "POST":
        return create_artist(request.get_json)
    
    response = make_response(
        jsonify({"error":"only post method is allowed"}),
        405
    )
    response.headers["Content-Type"] = "application/json"

    return response
    

@artist_blueprint.route("/get_artists_db", methods=["POST"])
def app_get_artists_db() -> Response:
    if request.method == "POST":
        return get_artists(request.get_json())
    
    response = make_response(
        jsonify({"error":"only post method is allowed"}),
        405
    )
    response.headers["Content-Type"] = "application/json"
    
    return response
    

@artist_blueprint.route("/get_artists_spotify", methods=["POST"])
def app_get_artists_spotify() -> Response:
    if request.method == "POST":
        return get_artists_spotify(request.get_json)
    
    response = make_response(
        jsonify({"error":"only post method is allowed"}),
        405
    )
    response.headers["Content-Type"] = "application/json"

    return response


@artist_blueprint.route("/delete_artist", methods=["POST"])
def app_delete_artist() -> Response:
    if request.method == "POST":
        return delete_artist(request.get_json)
    
    response = make_response(
        jsonify({"error":"only post method is allowed"}),
        405
    )
    response.headers["Content-Type"] = "application/json"
    
    return response