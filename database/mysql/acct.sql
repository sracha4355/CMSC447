CREATE TABLE IF NOT EXISTS `acct` (
    `account_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_email` VARCHAR(255) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `follower_count` INT UNSIGNED DEFAULT NULL,
    `following_count` INT UNSIGNED DEFAULT NULL,
    `creation_date` DATE DEFAULT NULL,
    PRIMARY KEY (`account_id`),
    UNIQUE KEY `user_email` (`user_email`),
    UNIQUE KEY `username` (`username`)
)