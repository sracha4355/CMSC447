import logging
import os
from flask import Flask, render_template, request, jsonify
from database import MySQL_Database
from files import read_file_in
from demo_4_16_24 import demo

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

# update 4/16/2024
demo(app, database)


# driver
if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)