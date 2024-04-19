import logging
import os
import json
from flask import Flask, render_template, request, jsonify
from database import MySQL_Database
from files import read_file_in
from demo_4_14_24 import demo
from libapi.access.access_token import load_access_token
import libapi.endpoints.endpoints as endpoints
from pathlib import Path
# init log file
# print() will not work, so if you want to "print" anything...
# you will need to do app.logger.info(<message>) then check the log file.
logging.basicConfig(filename="boombox.log", format="%(levelname)s:%(name)s:%(message)s")

MYSQL_HOST = "localhost"
MYSQL_USER = "root"
MYSQL_PASSWORD = "Mancity2003*"
MYSQL_DATABASE = "boombox"

# grab directory for mysql source files
# have to do this before running flask, or flask will break!
CWD = os.getcwd()
os.chdir("../../../database/mysql")
MYSQL_SOURCE_DIRECTORY = os.getcwd()
os.chdir(CWD)


# init flask
app = Flask(__name__)

# init database
database = MySQL_Database(
    host = MYSQL_HOST,
    user = MYSQL_USER,
    password = MYSQL_PASSWORD
)

# Create database and use database
database.create(MYSQL_DATABASE)

if not database.use(MYSQL_DATABASE):
    raise RuntimeError(f"Could not find database {MYSQL_DATABASE}")

# Create tables - they MUST be created in this order
database.execute(f"USE {MYSQL_DATABASE};")
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "artist.sql"))
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "single.sql"))
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "album.sql"))
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "album_entry.sql"))
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "music.sql"))
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "acct.sql"))
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "acct_follower.sql"))
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "playlist.sql"))
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "acct_playlist_music.sql"))
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "review.sql"))
database.execute(read_file_in(MYSQL_SOURCE_DIRECTORY, "review_comment.sql"))

database.commit()

# update 4/14/2024
# demo(app, database)

@app.route('/gen_token')
def generate_token():
    DIR  = load_access_token()

    return DIR

@app.route('/get_albums_by_genre',methods = ['POST'])
def get_albums_by_genre():

    
    data = request.json

    genre = data['genre']
    

    DIR = f'{str(Path(__file__).parent)}\\albumsCategory\\{genre}.json'

    data = None
    with open(DIR, 'r') as f:
        data = json.load(f)

    return data



@app.route('/get_songs_by_genre',methods = ['POST'])
def get_songs_by_genre():

    
    data = request.json

    genre = data['genre']
    

    DIR = f'{str(Path(__file__).parent)}\\songsCategory\\{genre}.json'

    data = None
    with open(DIR, 'r') as f:
        data = json.load(f)

    return data

    
@app.route('/get_album_info', methods = ['POST'])
def get_album_info():

    data = request.json
    albumName  = data['albumName']

    ID = endpoints.get_album_id(albumName)
    

    
    POPULARITY,TRACKLIST,IMAGE,RELEASE_DATE,ARTIST = endpoints.get_album_data(ID)

    artists = ""
    for i in range(len(ARTIST)):
        if i < len(ARTIST) - 1:
            artists += ARTIST[i] +","
        else:
            artists += ARTIST[i]

    album_info = {
        'image':IMAGE,
        'artist':artists,
        'release_day':RELEASE_DATE,
        'popularity':POPULARITY,
        'trackList':TRACKLIST,
    }
    
    
   

    return album_info


@app.route('/get_track_info', methods = ['POST'])
def get_track_info():

    data = request.json

    songName = data['songName']


    res = endpoints.search_for_tracks(songName)

    ARTIST = res['tracks']['items'][0]['artists']
    artists = ""
    for i in range(len(ARTIST)):
        name = ARTIST[i]['name']
        if i < len(ARTIST) - 1:
            artists+= f'{name},'
        else:
            artists+= f'{name}'
  

    track_info = {
        'track_name': res['tracks']['items'][0]['name'],
        'image': res['tracks']['items'][0]['album']['images'][0]['url'],
        'popularity':res['tracks']['items'][0]['popularity'],
        'release_date': res['tracks']['items'][0]['album']['release_date'],
        'artists': artists,
        'preview': res['tracks']['items'][0]['preview_url']
    }

    return track_info
    




@app.route('/get_popular_albums',methods = ['POST'])
def get_popular_albums():


    DIR = f'{str(Path(__file__).parent)}\\albumsCategory\\popularAlbums.json'

    data = None
    with open(DIR, 'r') as f:
        data = json.load(f)

    return data

@app.route('/get_recent', methods = ['POST'])
def get_recent():

    DIR = f'{str(Path(__file__).parent)}\\albumsCategory\\recentAlbums.json'

    data = None
    with open(DIR, 'r') as f:
        data = json.load(f)
   
  

    return data




@app.route('/get_popular_songs', methods = ['POST'])
def get_popular_songs():

    DIR = f'{str(Path(__file__).parent)}\\songsCategory\\popularSongs.json'

    data = None
    with open(DIR, 'r') as f:
        data = json.load(f)
 
  

    return data


@app.route('/get_popular_artists', methods = ['POST'])
def get_popular_artists():
    DIR = f'{str(Path(__file__).parent)}\\artistsCategory\\popularArtists.json'

    data = None
    with open(DIR, 'r') as f:
        data = json.load(f)
 
  

    return data


@app.route('/get_recent_artists', methods = ['POST'])
def get_recent_artists():
    DIR = f'{str(Path(__file__).parent)}\\artistsCategory\\recentArtists.json'

    data = None
    with open(DIR, 'r') as f:
        data = json.load(f)
 
  
    return data




@app.route('/get_recent_songs', methods = ['POST'])
def get_recent_songs():

    DIR = f'{str(Path(__file__).parent)}\\songsCategory\\recentTracks.json'

    data = None
    with open(DIR, 'r') as f:
        data = json.load(f)
    return data

@app.route('/get_artist', methods = ['POST'])
def get_artist():

    data = request.json

    artist_name  = data['artistName']

    artist = endpoints.search_for_artist(artist_name)
    artist_id = endpoints.get_artist_id(artist_name)
    response = endpoints.get_albums_from_artist(artist_id)

   
    image = artist['artists']['items'][0]['images'][0]['url']
    popularity  = artist['artists']['items'][0]['popularity']
    name = artist['artists']['items'][0]['name']
  
    albums = []
    album_images = []
    for item in response['items']:      
        albums.append(item['name'])
        album_images.append(item['images'][0]['url'])


    metadata = {'image': image,
                'popularity' : popularity,
                'albumList': albums,
                'name': name,
                'imageList':album_images
    }

    return metadata

@app.route('/get_artist_by_genre', methods = ['POST'])
def get_artist_by_genre():

    data = request.json

    genre = data['genre']

    DIR = f'{str(Path(__file__).parent)}\\artistsCategory\\{genre}.json'


    data = None
    with open(DIR, 'r') as f:
        data = json.load(f)
    return data
    

# driver
if __name__ == "__main__":

    app.run(debug=True, use_reloader=False)
