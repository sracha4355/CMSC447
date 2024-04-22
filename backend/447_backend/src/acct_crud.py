import sys
from pathlib import Path

LIBAPI_FP = str(Path(__file__).parent.parent.parent.parent)
sys.path.append(LIBAPI_FP)

from flask import Blueprint, request, Response, make_response, jsonify
from libapi.query.query_builder import QueryBuilder
from spotify_token import SPOTIFY_ACCESS_TOKEN

blueprint = Blueprint("acct", __name__)


def create_acct(json) -> Response:
    acct_email = json["user_email"]
    acct_username = json["username"]
    acct_password = json["user_password"]

    from boombox import database

    acct_table = database.get_table("acct")

    if acct_table == None:
        response = make_response(
            jsonify({"error":"table not found in database"}),
            500
        )
        response.headers["Content-Type"] = "application/json"
        return response
    
    columns = ["`user_email`", "`username`", "`password_hash`"]
    values = [f"\'{acct_email}\'", f"\'{acct_username}\'", f"\'{acct_password}\'"]
    acct_table.insert(columns, values)

    response = make_response(jsonify({"success":""}), 200)
    response.headers["Content-Type"] = "application/json"

    return response


def get_accts(json) -> Response:
    acct_username = json["acct_username"]

    from boombox import database

    acct_table = database.get_table("acct")

    if acct_table == None:
        response = make_response(
            jsonify({"error":"table not found in database"}),
            500
        )
        response.headers["Content-Type"] = "application/json"
        return response
    
    results = []

    accts = acct_table.get_all("`username`", f"\'{acct_username}\'")

    for acct in accts:
        (account_id, user_email, username, password_hash, follower_count, following_count, creation_date) = acct
        results.append({
            "account_id" : account_id,
            "user_email" : user_email,
            "username" : username,
            "password_hash" : password_hash,
            "follower_count" : follower_count,
            "following_count" : following_count,
            "creation_date" : creation_date
        })

    response = make_response(
        jsonify({"result":results}),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response


def update_acct(json) -> Response:
    account_id = json["account_id"]
    user_email = json["user_email"]
    username = json["username"]
    password_hash = json["password_hash"]
    follower_count = json["follower_count"]
    following_count = json["following_count"]

    from boombox import database

    acct_table = database.get_table("acct")

    if acct_table == None:
        response = make_response(
            jsonify({"error":"table not found in database"}),
            500
        )
        response.headers["Content-Type"] = "application/json"
        return response
    
    acct_table.update("`user_email`", f"\'{user_email}\'", "`account_id`", account_id)
    acct_table.update("`username`", f"\'{username}\'", "`account_id`", account_id)
    acct_table.update("`password_hash`", f"\'{password_hash}\'", "`account_id`", account_id)
    acct_table.update("`follower_count`", f"\'{follower_count}\'", "`account_id`", account_id)
    acct_table.update("`following_count`", f"\'{following_count}\'", "`account_id`", account_id)

    response = make_response(jsonify({"success":""}), 200)
    response.headers["Content-Type"] = "application/json"

    return response


def delete_acct(json) -> Response:
    account_id = json["account_id"]

    from boombox import database

    acct_table = database.get_table("acct")

    if acct_table == None:
        response = make_response(
            jsonify({"error":"table not found in database"}),
            500
        )
        response.headers["Content-Type"] = "application/json"
        return response
    
    acct_table.delete("`account_id`", account_id)

    response = make_response(jsonify({"success":""}), 200)
    response.headers["Content-Type"] = "application/json"

    return response


@blueprint.route("/create_acct", methods=["POST"])
def app_create_acct():
    if request.method == "POST":
        return create_acct(request.get_json())
    
    response = make_response(
        jsonify({"error":"only post method is allowed"}),
        405
    )
    response.headers["Content-Type"] = "application/json"
    
    return response


@blueprint.route("/get_acct", methods=["POST"])
def app_get_acct():
    if request.method == "POST":
        return get_acct(request.get_json())
    
    response = make_response(
        jsonify({"error":"only post method is allowed"}),
        405
    )
    response.headers["Content-Type"] = "application/json"
    
    return response


@blueprint.route("/update_acct", methods=["POST"])
def app_update_acct():
    if request.method == "POST":
        return update_acct(request.get_json())
    
    response = make_response(
        jsonify({"error":"only post method is allowed"}),
        405
    )
    response.headers["Content-Type"] = "application/json"
    
    return response


@blueprint.route("/delete_acct", methods=["POST"])
def app_delete_acct():
    if request.method == "POST":
        return delete_acct(request.get_json())
    
    response = make_response(
        jsonify({"error":"only post method is allowed"}),
        405
    )
    response.headers["Content-Type"] = "application/json"
    
    return response