# BoomBox

A web application which allows users to discover artists, albums, and tracks - with the ability for registered users to leave reviews on music, and create and view playlists.

The app uses Python/Flask for the backend, React (Javascript) for the frontend, and MySQL for the database. It also utilizes the Spotify Web API to fetch information about artists and music.

### How to run

The backend runs under a python virtual environment. To create the virtual environment:

```
cd /backend
python -m venv 447_backend
```

You will then need to activate the virtual environment, then install packages for the backend to run:

```
./447_backend/Scripts/activate
python -m pip install -r requirements.txt
```

Then finally, to run the backend:

```
cd /447_backend/src
python boombox.py
```

**NOTE:** You may need to change the database login information in boombox.py. Change "MYSQL_USER" and "MYSQL_PASSWORD" to match your user credentials for MySQL.

To install packages for the frontend:

```
cd ../../../frontend/Boombox/boombox/src
npm install
```

Then to run the frontend:

```
npm start
```

The application will automatically launch a browser tab in your primary browser with the URL `localhost:3000`.