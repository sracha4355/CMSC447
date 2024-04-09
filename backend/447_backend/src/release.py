from tables import get_from_table, update_table, delete_from_table

class Release_Table:
    def __init__(self, app, database, cursor, table):
        self.app = app
        self.database = database
        self.cursor = cursor
        self.table = table
        self.table_id = f"`{table}_id`"
        self.table_length = f"`{table}_length`"
        self.table_boomscore = f"`{table}_boomscore`"
        self.table_name = f"`{table}_name`"


    def create(self, single_name, single_length):
        self.cursor.execute(f"INSERT INTO {self.table} ({self.table_name}, {self.table_length}) VALUES (\'{single_name}\', \'{single_length}\');")
        self.database.commit()


    def create(self, single_name, single_length, artist_id, single_boomscore):
        self.cursor.execute(f"INSERT INTO {self.table} ({self.table_name}, {self.table_length}, `artist_id`, {self.table_boomscore}) VALUES (\'{single_name}\', \'{single_length}\', {artist_id}, {single_boomscore});")
        self.database.commit()


    def get_by_release_id(self, release_id):
        return get_from_table(self.cursor, self.table, "*", self.table_id, release_id)
    

    def get_by_artist_id(self, artist_id):
        return get_from_table(self.cursor, self.table, "*", "`artist_id`", artist_id)
    

    def get_boomscore(self, release_id):
        boomscore = get_from_table(self.cursor, self.table, self.table_boomscore, self.table_id, release_id)

        if boomscore == []:
            return None
        
        (boomscore,) = boomscore[0]
        return boomscore
    

    def exists(self, release_id):
        return self.get_by_release_id(release_id) != []
    

    def any_exists_by_artist_id(self, artist_id):
        return self.get_by_artist_id(artist_id) != []


    def update_release_name(self, release_id, name):
        update_table(self.database, self.cursor, self.table, self.table_name, name, self.table_id, release_id)

    
    def update_release_length(self, release_id, length):
        update_table(self.database, self.cursor, self.table, self.table_length, length, self.table_id, release_id)


    def update_artist_id(self, release_id, artist_id):
        update_table(self.database, self.cursor, self.table, "`artist_id`", artist_id, self.table_id, release_id)


    def update_boomscore(self, release_id, boomscore):
        update_table(self.database, self.cursor, self.table, self.table_boomscore, boomscore, self.table_id, release_id)
        

    def delete_release_id(self, id):
        delete_from_table(self.database, self.cursor, self.table, self.table_id, id)

    
    def delete_artist_id(self, artist_id):
        delete_from_table(self.database, self.cursor, self.table, "`artist_id`", artist_id)