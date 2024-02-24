/*first time running this do create 
database boombox right before use boombox*/
use boombox;
/* DROP CLAUSES
Drop table artist
Drop table single;
Drop table album_entry;
Drop table album;
Drop table music;
*/
CREATE TABLE artist(
	artist_id -- name of column
		-- atributes --
			INT UNSIGNED 
			AUTO_INCREMENT 
			PRIMARY KEY, 
    artist_name 
		VARCHAR(255) 
        NOT NULL,
    artist_picture -- column will hold filepath to a picture
		VARCHAR(255) 
        UNIQUE 
        /* unique identifer used because a 
           filepath to pictures should be unique */
);

create table single(
	single_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    single_name VARCHAR(255) NOT NULL,
    single_length VARCHAR(8),
    		-- store length of song as string in format HH:MM:SS
    single_cover VARCHAR(255) UNIQUE
);
-- one to many relation between album and album_entry
create table album(
	album_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    album_length VARCHAR(8),
		-- store length of album as string in format HH:MM:SS
	album_cover VARCHAR(255) UNIQUE
		-- store filepath to a picture here        
);
create table album_entry(
	entry_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    entry_length VARCHAR(8),
		-- store length of entry as string in format HH:MM:SS
	album_id INT UNSIGNED NOT NULL,
    foreign key (album_id) references album(album_id)
);
create table music(
	music_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    artist_id INT UNSIGNED,
    release_date DATE,
    is_album BOOL NOT NULL,
    single_id INT UNSIGNED,
    album_id INT UNSIGNED,
    foreign key (artist_id) 
		references artist(artist_id)
        on delete set null
	,
    foreign key (single_id) 
		references single(single_id)
        on delete set null
	,
    foreign key (album_id) 
		references album(album_id)
        on delete set null
);

show tables from boombox;
