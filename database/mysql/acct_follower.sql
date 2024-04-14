CREATE TABLE IF NOT EXISTS `acct_follower` (
    `follower_account_id` INT UNSIGNED NOT NULL,
    `following_account_id` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`follower_account_id`, `following_account_id`),
    CONSTRAINT `acct_follower_ibfk_1` FOREIGN KEY (`follower_account_id`) REFERENCES `acct` (`account_id`),
    CONSTRAINT `acct_follower_ibfk_2` FOREIGN KEY (`following_account_id`) REFERENCES `acct` (`account_id`)
)