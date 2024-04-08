from tables import update_table, delete_from_table

class Artist_Table:
    def __init__(self, app, database, cursor):
        self.app = app
        self.database = database
        self.cursor = cursor


    def create(self, artist_name, artist_boomscore):
        self.cursor.execute(f"INSERT INTO `artist` (`artist_name`, `artist_boomscore`) VALUES (\'{artist_name}\', \'{artist_boomscore}\');")
        self.database.commit()


    def get_artists(self, artist_name):
         self.cursor.execute(f"SELECT * FROM `artist` WHERE `artist_name`=\'{artist_name}\';")
         return self.cursor.fetchall()


    def get(self, artist_id):
        self.cursor.execute(f"SELECT * FROM `artist` WHERE `artist_id`={artist_id};")
        all = self.cursor.fetchall()

        if all == []:
            return None
        
        return all[0]


    def get_name(self, artist_id):
        self.cursor.execute(f"SELECT `artist_name` FROM `artist` WHERE `artist_id`={artist_id};")
        name = self.cursor.fetchall()

        if name == []:
            return None
        
        (name,) = name[0]
        return name


    def get_boomscore(self, artist_id):
        self.cursor.execute(f"SELECT `artist_boomscore` FROM `artist` WHERE `artist_id`={artist_id};")
        boomscore = self.cursor.fetchall()

        if boomscore == []:
            return None
        
        (boomscore,) = boomscore[0]
        return boomscore


    def exists(self, artist_id):
        return self.get_name(artist_id) != None
    
    
    def any_exists(self, artist_name):
        return self.get_artists(artist_name) != []


    def update_boomscore(self, artist_id, artist_boomscore):
        update_table(self.database, self.cursor, "`artist`", "`artist_boomscore`", artist_boomscore, "`artist_id`", artist_id)
    

    def delete(self, artist_id):
        delete_from_table(self.database, self.cursor, "`artist`", "`artist_id`", artist_id)