from tables import get_from_table, delete_from_table

class Music_Table:
    def __init__(self, app, database, cursor):
        self.app = app
        self.database = database
        self.cursor = cursor

    
    def create_single(self, artist_id, single_id):
        self.cursor.execute(f"INSERT INTO `music` (`artist_id`, `single_id`, `is_album`) VALUES ({artist_id}, {single_id}, 0);")
        self.database.commit()


    def create_album(self, artist_id, album_id):
        self.cursor.execute(f"INSERT INTO `music` (`artist_id`, `album_id`, `is_album`) VALUES ({artist_id}, {album_id}, 1);")
        self.database.commit()


    def get_by_music_id(self, music_id):
        return get_from_table(self.cursor, "`music`", "*", "`music_id`", music_id)

    
    def get_by_artist_id(self, artist_id):
        return get_from_table(self.cursor, "`music`", "*", "`artist_id`", artist_id)
    

    def get_by_single_id(self, single_id):
        return get_from_table(self.cursor, "`music`", "*", "`single_id`", single_id)
    

    def get_by_album_id(self, album_id):
        return get_from_table(self.cursor, "`music`", "*", "`album_id`", album_id)
    

    def is_album(self, music_id):
        self.cursor.execute(f"SELECT `is_album` FROM `music` WHERE `music_id`={music_id}")
        is_album = self.cursor.fetchall()

        if is_album == []:
            return None
        
        (is_album,) = is_album[0]
        return is_album == 1


    def update_artist_id(self, music_id, artist_id):
        self.cursor.execute(f"UPDATE `music` SET `artist_id`={artist_id} WHERE `music_id`={music_id};")
        self.database.commit()


    def update_single_id(self, music_id, single_id):
        self.cursor.execute(f"UPDATE `music` SET `single_id`={single_id} WHERE `music_id`={music_id};")
        self.cursor.execute(f"UPDATE `music` SET `album_id`=NULL WHERE `music_id`={music_id};")
        self.cursor.execute(f"UPDATE `music` SET `is_album`=0 WHERE `music_id`={music_id};")
        self.database.commit()


    def update_album_id(self, music_id, album_id):
        self.cursor.execute(f"UPDATE `music` SET `album_id`={album_id} WHERE `music_id`={music_id};")
        self.cursor.execute(f"UPDATE `music` SET `single_id`=NULL WHERE `music_id`={music_id};")
        self.cursor.execute(f"UPDATE `music` SET `is_album`=1 WHERE `music_id`={music_id};")
        self.database.commit()


    def delete_music_id(self, music_id):
        delete_from_table(self.database, self.cursor, "`music`", "`music_id`", music_id)


    def delete_artist_id(self, artist_id):
        delete_from_table(self.database, self.cursor, "`music`", "`artist_id`", artist_id)


    def delete_single_id(self, single_id):
        delete_from_table(self.database, self.cursor, "`music`", "`single_id`", single_id)


    def delete_album_id(self, album_id):
        delete_from_table(self.database, self.cursor, "`music`", "`album_id`", album_id)