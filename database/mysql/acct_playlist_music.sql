CREATE TABLE IF NOT EXISTS `acct_playlist_music` (
<<<<<<< Updated upstream
    `account_id` INT UNSIGNED NOT NULL,
    `playlist_id` INT UNSIGNED NOT NULL,
    `music_id` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`account_id`, `playlist_id`, `music_id`),
    CONSTRAINT `acct_playlist_music_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `acct` (`account_id`),
    CONSTRAINT `acct_playlist_music_ibfk_2` FOREIGN KEY (`playlist_id`) REFERENCES `playlist` (`playlist_id`),
    CONSTRAINT `acct_playlist_music_ibfk_3` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`)
)
=======
  `acct_id` int NOT NULL,
  `playlist_id` int NOT NULL,
  `spotify_uid` varchar(22) NOT NULL,
  `image_url`	varchar(255),
  `song_name`	varchar(255)
) 
>>>>>>> Stashed changes
