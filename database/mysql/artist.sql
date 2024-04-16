CREATE TABLE IF NOT EXISTS `artist` (
    `artist_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `artist_name` VARCHAR(255) NOT NULL,
    `artist_picture` VARCHAR(255) DEFAULT NULL,
    `artist_boomscore` INT NOT NULL,
    `spotify_uid` VARCHAR(22) DEFAULT NULL,
    PRIMARY KEY (`artist_id`, `artist_name`)
)