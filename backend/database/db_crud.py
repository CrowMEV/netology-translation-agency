from database.base import db


async def get_contacts():
    db_data = db['site_data'].find_one()
    return db_data
