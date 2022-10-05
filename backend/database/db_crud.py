from database.base import db


async def get_contacts():
    db_data = await db['site_data'].find_one()
    return db_data
