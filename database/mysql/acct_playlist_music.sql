CREATE TABLE IF NOT EXISTS `acct_playlist_music` (
    `account_id` INT UNSIGNED NOT NULL,
    `playlist_id` INT UNSIGNED NOT NULL,
    `music_id` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`account_id`, `playlist_id`, `music_id`),
    CONSTRAINT `acct_playlist_music_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `acct` (`account_id`) ON DELETE CASCADE,
    CONSTRAINT `acct_playlist_music_ibfk_2` FOREIGN KEY (`playlist_id`) REFERENCES `playlist` (`playlist_id`) ON DELETE CASCADE,
    CONSTRAINT `acct_playlist_music_ibfk_3` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`) ON DELETE CASCADE
)