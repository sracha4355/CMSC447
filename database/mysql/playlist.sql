CREATE TABLE IF NOT EXISTS `playlist` (
    `playlist_id` int unsigned NOT NULL AUTO_INCREMENT,
    `creation_date` date DEFAULT NULL,
    `account_id` int unsigned DEFAULT NULL,
    PRIMARY KEY (`playlist_id`),
    KEY `account_id` (`account_id`),
    CONSTRAINT `playlist_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `acct` (`account_id`) ON DELETE CASCADE
)