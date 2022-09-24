import os
from pymongo import MongoClient


# Init DB
client = MongoClient(os.environ.get('DATABASE_URL', 'base_url'))
db = client['altai']


if not db.site_data.find_one():
    db.site_data.insert_one({
        'phone_numbers': [os.getenv('PHONE_1'), os.getenv('PHONE_2')],
        'whatsapp': os.getenv('WHATSAPP'),
        'telegram': os.getenv('TELEGRAM'),
        'mail': os.getenv('MAIL'), 'address': os.getenv('ADDRESS')
    })
