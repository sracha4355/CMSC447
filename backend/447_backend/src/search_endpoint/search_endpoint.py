import sys
from pathlib import Path
### Add folder with libapi to sys path. This is so when we import from libapi, python knows where to look

LIBAPI_FP = str(Path(__file__).parent.parent.parent.parent.parent)
sys.path.append(LIBAPI_FP)
print('LIBAPI_FP', LIBAPI_FP)

sys.path.append(str(Path(__file__).parent.parent))

import traceback
from flask import Blueprint, Flask, request, jsonify, make_response, Response
from libapi.query.spot_album_builder import SpotifyAlbumEndpoint
from libapi.query.spot_artist_builder import SpotifyArtistEndpoint
from libapi.access import access_token
from libapi.utils.utils import pretty_print
from release import Release_Table
from album_entry import Album_Entry_Table
from artist import Artist_Table
from database import MySQL_Database