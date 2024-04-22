CREATE TABLE IF NOT EXISTS `album` (
    `album_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `album_length` VARCHAR(8) DEFAULT NULL,
    `album_cover` VARCHAR(255) DEFAULT NULL,
    `artist_id` INT UNSIGNED DEFAULT NULL,
    `album_name` VARCHAR(255) NOT NULL,
    `album_boomscore` INT NOT NULL,
    `spotify_uid` VARCHAR(22) DEFAULT NULL,
    PRIMARY KEY (`album_id`),
    UNIQUE KEY `album_cover` (`album_cover`),
    KEY `artist_it` (`artist_id`),
    CONSTRAINT `artist_it` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE CASCADE ON UPDATE CASCADE
)