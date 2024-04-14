CREATE TABLE IF NOT EXISTS `review_comment` (
    `review_comment_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `review_id` INT UNSIGNED NOT NULL,
    `comment` TEXT NOT NULL,
    `like_count` INT NOT NULL,
    `dislike_count` INT NOT NULL,
    `creation_date` DATE NOT NULL,
    PRIMARY KEY (`review_comment_id`, `review_id`),
    CONSTRAINT `review_comment_ibfk_1` FOREIGN KEY (`review_id`) REFERENCES `review` (`review_id`)
)