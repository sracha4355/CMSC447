def get_from_table(cursor, table, what_column, where_column, where_id):
    cursor.execute(f"SELECT {what_column} FROM {table} WHERE {where_column}={where_id}")
    return cursor.fetchall()


def update_table(database, cursor, table, set_column, set_value, where_column, where_id):
    cursor.execute(f"UPDATE {table} SET {set_column}={set_value} WHERE {where_column}={where_id};")
    database.commit()


def delete_from_table(database, cursor, table, column, id):
    cursor.execute(f"DELETE FROM {table} WHERE {column}={id};")
    database.commit()