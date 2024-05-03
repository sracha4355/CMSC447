CREATE TABLE IF NOT EXISTS `music` (
<<<<<<< Updated upstream
    `music_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `artist_id` INT UNSIGNED NOT NULL,
    `release_date` DATE DEFAULT NULL,
    `is_album` TINYINT(1) NOT NULL,
    `single_id` INT UNSIGNED DEFAULT NULL,
    `album_id` INT UNSIGNED DEFAULT NULL,
    PRIMARY KEY (`music_id`),
    KEY `artist_id` (`artist_id`),
    KEY `single_id` (`single_id`),
    KEY `album_id` (`album_id`),
    CONSTRAINT `music_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`),
    CONSTRAINT `music_ibfk_2` FOREIGN KEY (`single_id`) REFERENCES `single` (`single_id`) ON DELETE SET NULL,
    CONSTRAINT `music_ibfk_3` FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`) ON DELETE SET NULL 
=======
  `music_id` int unsigned NOT NULL AUTO_INCREMENT,
  `release_date` date DEFAULT NULL,
  `is_album` tinyint(1) NOT NULL,
  `single_id` int unsigned DEFAULT NULL,
  `album_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`music_id`),
  KEY `single_id` (`single_id`),
  KEY `album_id` (`album_id`),
  CONSTRAINT `music_ibfk_2` FOREIGN KEY (`single_id`) REFERENCES `single` (`single_id`) ON DELETE SET NULL,
  CONSTRAINT `music_ibfk_3` FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`) ON DELETE SET NULL
>>>>>>> Stashed changes
)