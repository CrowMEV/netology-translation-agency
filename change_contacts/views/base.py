import os
from hashlib import sha256

from pymongo import MongoClient


# Init DB
client = MongoClient(os.environ.get('DATABASE_URL', 'base_url'))
db = client['altai']
data = db['site_data'].find_one()
admin = data.get('admin')
db['site_data'].update_one(
                {'admin': admin},
                {'$set': {'admin': sha256(admin.encode()).hexdigest()}}
            )


def get_data():
    db_data = db['site_data'].find_one()
    del db_data['_id']
    del db_data['admin']
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
    data = db['site_data'].find_one()
    return data.get('admin')
