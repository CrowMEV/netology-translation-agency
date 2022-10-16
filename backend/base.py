import os
from pymongo import MongoClient


# Init DB
client = MongoClient(os.environ.get('DATABASE_URL', 'base_url'))


async def get_contacts() -> dict:
    db_data: dict = client['altai']['site_data'].find_one()
    del db_data['_id']
    return db_data
