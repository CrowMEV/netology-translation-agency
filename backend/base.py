import os
from pymongo import MongoClient

from crypto import encoding, decoding

# Init DB
client = MongoClient(os.environ.get('DATABASE_URL', 'base_url'))
db = client['altai']
data = db['site_data'].find_one()
password = data.get('email_password')
db['site_data'].update_one(
                {'email_password': password},
                {'$set': {'email_password': encoding(password)}}
            )


async def get_contacts() -> dict:
    db_data = client['altai']['site_data'].find_one()
    if db_data:
        del db_data['_id']
        del db_data['email_password']
        del db_data['admin']
        return db_data
    return {}


async def get_credentials() -> dict:
    credentials = {}
    db_data = client['altai']['site_data'].find_one()
    if db_data:
        credentials['login'] = db_data.get('email', '')
        credentials['password'] = decoding(db_data.get('email_password', ''))

        return credentials
    return credentials
