CREATE TABLE IF NOT EXISTS `album_entry` (
    `entry_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `entry_length` VARCHAR(8) DEFAULT NULL,
    `album_id` INT UNSIGNED NOT NULL,
    `entry_name` VARCHAR(255) NOT NULL,
    `spotify_uid` VARCHAR(22) DEFAULT NULL,
    PRIMARY KEY (`entry_id`),
    KEY `album_id` (`album_id`),
    CONSTRAINT `album_entry_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`)
)