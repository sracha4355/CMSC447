CREATE TABLE IF NOT EXISTS `album` (
<<<<<<< Updated upstream
    `album_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `album_length` VARCHAR(8) DEFAULT NULL,
    `album_cover` VARCHAR(255) DEFAULT NULL,
    `artist_id` INT UNSIGNED DEFAULT NULL,
    `album_name` VARCHAR(255) NOT NULL,
    `album_boomscore` INT NOT NULL,
    PRIMARY KEY (`album_id`),
    UNIQUE KEY `album_cover` (`album_cover`),
    KEY `artist_it` (`artist_id`),
    CONSTRAINT `artist_it` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE SET NULL ON UPDATE CASCADE
)
=======
  `album_id` int unsigned NOT NULL AUTO_INCREMENT,
  `album_cover` varchar(255) DEFAULT NULL,
  `album_name` varchar(255) NOT NULL,
  `album_boomscore` int NOT NULL,
  `spotify_uid` varchar(22) DEFAULT NULL,
  `tracks` json DEFAULT NULL,
  `artists` json DEFAULT NULL,
  `release_date` varchar(15) DEFAULT NULL,
  `likes` int unsigned DEFAULT 0,
  `dislikes` int unsigned DEFAULT 0,
  PRIMARY KEY (`album_id`),
  UNIQUE KEY `album_cover` (`album_cover`),
  UNIQUE KEY `spotify_uid` (`spotify_uid`),
  FULLTEXT KEY `album_name_index` (`album_name`)
);
>>>>>>> Stashed changes
