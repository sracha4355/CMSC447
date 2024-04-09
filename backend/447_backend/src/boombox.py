import logging
import os
from flask import Flask, render_template, request, jsonify
import mysql.connector
from files import read_file
from artist import Artist_Table
from release import Release_Table
from album_entry import Album_Entry_Table
from music import Music_Table

# init log file
# print() will not work, so if you want to "print" anything...
# you will need to do app.logger.info(<message>) then check the log file.
logging.basicConfig(filename="boombox.log", format="%(levelname)s:%(name)s:%(message)s")

MYSQL_HOST = "localhost"
MYSQL_USER = "root"
MYSQL_PASSWORD = "root"
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
database = mysql.connector.connect(
    host=MYSQL_HOST,
    user=MYSQL_USER,
    passwd=MYSQL_PASSWORD
)

# init cursor
# this is how we make mysql queries
cursor = database.cursor()

# these have to be executed in this order, DO NOT CHANGE
cursor.execute(f"CREATE DATABASE IF NOT EXISTS {MYSQL_DATABASE};")
cursor.execute(f"USE {MYSQL_DATABASE};")
cursor.execute(read_file(MYSQL_SOURCE_DIRECTORY, "artist.sql"))
cursor.execute(read_file(MYSQL_SOURCE_DIRECTORY, "single.sql"))
cursor.execute(read_file(MYSQL_SOURCE_DIRECTORY, "album.sql"))
cursor.execute(read_file(MYSQL_SOURCE_DIRECTORY, "album_entry.sql"))
cursor.execute(read_file(MYSQL_SOURCE_DIRECTORY, "music.sql"))

database.commit()

"""artists = Artist_Table(
    app=app, 
    database=database, 
    cursor=cursor
)

singles = Release_Table(
    app=app,
    database=database,
    cursor=cursor,
    table="single"
)

albums = Release_Table(
    app=app,
    database=database,
    cursor=cursor,
    table="album"
)

album_entries = Album_Entry_Table(
    app=app,
    database=database,
    cursor=cursor
)

music = Music_Table(
    app=app,
    database=database,
    cursor=cursor
)

artists.create("Kanye", 50)
artists.create("Dude", 100)
#app.logger.warning(artists.get_artists("Dude"))
artists.update_boomscore(1, 125)
artists.delete(2)

singles.create("idk", "3:04", 1, 100)
albums.create("test", "15:11", 1, 25)
album_entries.create("???", "2:55", 1)
music.create_single(1, 1)
music.create_album(1, 1)"""

# driver
if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)