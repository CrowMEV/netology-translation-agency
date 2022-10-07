from database.base import db


def get_data():
    db_data = db['site_data'].find_one()
    return db_data


def save_data(data):
    db_data = db['site_data'].find_one()
    for field_name, field_value in data.items():
        if field_value.strip():
            db['site_data'].update_one(
                {field_name: db_data.get(field_name)}, {'$set': {field_name: field_value}}
            )
