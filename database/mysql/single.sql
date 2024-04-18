CREATE TABLE IF NOT EXISTS `single` (
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