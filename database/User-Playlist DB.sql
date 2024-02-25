use boombox;

CREATE TABLE Acct(
	ACCOUNT_ID VARCHAR(20) PRIMARY KEY ,
    USER_EMAIL VARCHAR(20) unique NOT NULL,
    USERNAME VARCHAR(50) unique NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    FOLLOWER_COUNT INT unsigned auto_increment,
    FOLLOWING_COUNT INT unsigned auto_increment,
    CREATION_DATE DATE
);

CREATE TABLE Playlist(
	PLAYLIST_ID VARCHAR(20) PRIMARY KEY,
	CREATION_DATE date,
    ACCOUNT_ID VARCHAR(20),
    foreign key(ACCOUNT_ID) references Acct(ACCOUNT_ID)
);

CREATE TABLE MusicIdArray(
    PLAYLIST_ID VARCHAR(20),
    music_id INT UNSIGNED,
    foreign key(PLAYLIST_ID) references Playlist(PLAYLIST_ID),
    foreign key(music_id) references music(music_id)
)