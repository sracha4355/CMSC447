
CREATE TABLE IF NOT EXISTS `review_comment` (
<<<<<<< Updated upstream
    `review_comment_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `review_id` INT UNSIGNED NOT NULL,
    `comment` TEXT NOT NULL,
    `like_count` INT NOT NULL,
    `dislike_count` INT NOT NULL,
    `creation_date` DATE NOT NULL,
    PRIMARY KEY (`review_comment_id`, `review_id`),
    CONSTRAINT `review_comment_ibfk_1` FOREIGN KEY (`review_id`) REFERENCES `review` (`review_id`)
)
=======
  `review_comment_id` int unsigned NOT NULL AUTO_INCREMENT,
  `review_id` int unsigned NOT NULL,
  `comment` text NOT NULL,
  `like_count` int NOT NULL,
  `dislike_count` int NOT NULL,
  `creation_date` date NOT NULL,
  PRIMARY KEY (`review_comment_id`,`review_id`),
  KEY `review_comment_ibfk_1` (`review_id`),
  CONSTRAINT `review_comment_ibfk_1` FOREIGN KEY (`review_id`) REFERENCES `review` (`review_id`)
) 
>>>>>>> Stashed changes
