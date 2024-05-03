CREATE TABLE IF NOT EXISTS `review` (
<<<<<<< Updated upstream
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
    CONSTRAINT `review_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `acct` (`account_id`),
    CONSTRAINT `review_ibfk_2` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`)
=======
  `review_id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int unsigned NOT NULL,
  `music_id` int unsigned NOT NULL,
  `like_count` int NOT NULL,
  `dislike_count` int NOT NULL,
  `creation_date` date NOT NULL,
  `review` text NOT NULL,
  PRIMARY KEY (`review_id`),
  KEY `account_id` (`account_id`),
  KEY `music_id` (`music_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `acct` (`account_id`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`)
>>>>>>> Stashed changes
)