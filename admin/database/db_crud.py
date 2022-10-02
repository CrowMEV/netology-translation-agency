from database.base import db


def get_data():
    db_data = db['site_data'].find_one()
    return db_data


def save_data(data):
    for field_name, field_value in data.items():
        db['site_data'].update_one(
            {field_name: field_value}, {'$set': {field_name: field_value}}
        )
