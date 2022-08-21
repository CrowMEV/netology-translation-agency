import os
from pymongo import MongoClient


# Init DB
login = os.getenv('MONGO_INITDB_ROOT_USERNAME')
password = os.getenv('MONGO_INITDB_ROOT_PASSWORD')
client = MongoClient(f"mongodb://{login}:{password}@db:27017")
db = client['altai']

if not db.site_data.find_one():
    db.site_data.insert_one({
        'phone_numbers': [os.getenv('PHONE_1'), os.getenv('PHONE_2')],
        'whatsapp': os.getenv('WHATSAPP'),
        'telegram': os.getenv('TELEGRAM'),
        'mail': os.getenv('MAIL'), 'address': os.getenv('ADDRESS')
    })


async def get_data():
    db_data = db['site_data'].find_one()
    return db_data


async def save_data(data):
    for field_name, field_value in data.items():
        db['site_data'].update_one({field_name: field_value}, {'$set': {field_name: '1'}})
