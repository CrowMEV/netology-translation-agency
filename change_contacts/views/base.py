import os

from pymongo import MongoClient
from werkzeug.security import generate_password_hash


# Init DB
client = MongoClient(os.environ.get('DATABASE_URL', 'base_url'))
db = client['altai']
data = db['site_data'].find_one()
value = data.get('password')
db['site_data'].update_one(
                {'admin_password': value},
                {'$set': {'admin_password': generate_password_hash(value)}}
            )


def get_data():
    db_data = db['site_data'].find_one()
    del db_data['admin_password']
    del db_data['admin_login']
    return db_data


def save_data(data):
    db_data = db['site_data'].find_one()
    for field_name, field_value in data.items():
        if field_value.strip():
            db['site_data'].update_one(
                {field_name: db_data.get(field_name)},
                {'$set': {field_name: field_value}}
            )


def get_login_and_password():
    db_data = db['site_data'].find_one()
    return {
        'login': db_data.get('login'),
        'password': db_data.get('password')
    }
