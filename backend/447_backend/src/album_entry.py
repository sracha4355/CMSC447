from tables import get_from_table, update_table, delete_from_table

class Album_Entry_Table:
    def __init__(self, app, database, cursor):
        self.app = app
        self.database = database
        self.cursor = cursor


    def create(self, entry_name, entry_length, album_id):
        self.cursor.execute(f"INSERT INTO `album_entry` (`entry_name`, `entry_length`, `album_id`) VALUES (\'{entry_name}\', \'{entry_length}\', {album_id})")
        self.database.commit()


    def get_by_entry_id(self, entry_id):
        return get_from_table(self.cursor, "`album_entry`", "*", "`entry_id`", entry_id)
    

    def get_by_album_id(self, album_id):
        return get_from_table(self.cursor, "`album_entry`", "*", "`album_id`", album_id)
    

    def exists(self, entry_id):
        return self.get_by_entry_id(entry_id) != []
    

    def any_exists_by_album_id(self, album_id):
        return self.get_by_album_id(album_id) != []


    def update_entry_name(self, entry_name, entry_id):
        update_table(self.database, self.cursor, "`album_entry`", "`entry_name`", entry_name, "`entry_id`", entry_id)

    
    def update_entry_length(self, entry_length, entry_id):
        update_table(self.database, self.cursor, "`album_entry`", "`entry_length`", entry_length, "`entry_id`", entry_id)


    def delete_entry_id(self, entry_id):
        delete_from_table(self.database, self.cursor, "`album_entry`", "`entry_id`", entry_id)


    def delete_album_id(self, album_id):
        delete_from_table(self.database, self.cursor, "`album_entry`", "`album_id`", album_id)