import os
from pymongo import MongoClient


# Init DB
client = MongoClient(os.environ.get('DATABASE_URL', 'base_url'))


async def get_contacts() -> dict:
    db_data = client['altai']['site_data'].find_one()
    if db_data:
        del db_data['_id']
        del db_data['email_password']
        return db_data
    return {}


async def get_credentials() -> dict:
    credentials = {}
    db_data = client['altai']['site_data'].find_one()
    if db_data:
        credentials['login'] = db_data.get('email', '')
        credentials['password'] = db_data.get('email_password', '')
        return credentials
    return credentials
