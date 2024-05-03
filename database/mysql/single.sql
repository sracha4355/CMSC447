CREATE TABLE IF NOT EXISTS `single` (
<<<<<<< Updated upstream
    `single_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `single_name` VARCHAR(255) NOT NULL,
    `single_length` VARCHAR(8) DEFAULT NULL,
    `single_cover` VARCHAR(255) DEFAULT NULL,
    `artist_id` INT UNSIGNED DEFAULT NULL,
    `single_boomscore` INT NOT NULL,
    PRIMARY KEY (`single_id`),
    UNIQUE KEY `single_cover` (`single_cover`),
    KEY `artist_id` (`artist_id`),
    CONSTRAINT `artist_id` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE SET NULL
)
=======
  `single_id` int unsigned NOT NULL AUTO_INCREMENT,
  `single_name` varchar(255) NOT NULL,
  `single_cover` varchar(255) DEFAULT NULL,
  `single_boomscore` int NOT NULL,
  `spotify_uid` varchar(22) DEFAULT NULL,
  `artists` varchar(255) DEFAULT NULL,
  `preview_url` varchar(255) DEFAULT NULL,
  `release_date` varchar(15) DEFAULT NULL,
  `likes` int unsigned DEFAULT '0',
  `dislikes` int unsigned DEFAULT '0',
   PRIMARY KEY (`single_id`),
   UNIQUE KEY `spotify_uid` (`spotify_uid`)
);
>>>>>>> Stashed changes
