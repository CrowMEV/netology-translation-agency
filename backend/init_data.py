import os
import json


def create_data() -> None:
    contacts = os.path.join(os.path.dirname(__file__), 'store_data', 'data.json')
    data = {
        'city': os.getenv('CITY', ''),
        'address': os.getenv('ADDRESS', ''),
        'email': os.getenv("EMAIL", ''),
        'email_password': os.getenv("EMAIL_PASSWORD", ''),
        'whatsapp': os.getenv("WHATSAPP", ''),
        'telegram': os.getenv("TELEGRAM", ''),
        'phone_1': os.getenv("PHONE_1", ''),
        'phone_2': os.getenv("PHONE_2", ''),
        'map_uri': os.getenv('MAP_URI', '').split('/')[-1]
    }
    if not os.path.isfile(contacts):
        with open(contacts, 'w') as file:
            json.dump(data, file, ensure_ascii=False, indent=2)



if __name__ == '__main__':
    create_data()
