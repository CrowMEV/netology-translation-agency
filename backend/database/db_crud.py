from database.base import db


async def get_contacts() -> dict:
    db_data = db['site_data'].find_one()
    del db_data['_id']
    return db_data
