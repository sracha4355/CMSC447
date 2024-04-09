import logging
import os
from flask import Flask, render_template, request, jsonify
import mysql.connector
from files import read_file
from demo_4_9_24 import demo

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

# for midterm presentation (4/9/24)
demo(app, database, cursor)


# driver
if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)