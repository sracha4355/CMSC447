CREATE TABLE IF NOT EXISTS `review` (
    `review_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `account_id` INT UNSIGNED NOT NULL,
    `music_id` INT UNSIGNED NOT NULL,
    `like_count` INT NOT NULL,
    `dislike_count` INT NOT NULL,
    `creation_date` DATE NOT NULL,
    `review` TEXT NOT NULL,
    PRIMARY KEY (`review_id`),
    KEY `account_id` (`account_id`),
    KEY `music_id` (`music_id`),
    CONSTRAINT `review_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `acct` (`account_id`) ON DELETE CASCADE,
    CONSTRAINT `review_ibfk_2` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`) ON DELETE CASCADE
)