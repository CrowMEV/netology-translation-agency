import os
import json


def create_data() -> None:
    contacts = os.path.join(os.path.dirname(__file__), 'store_data', 'data.json')
    data = {
        'city': os.environ.get('CITY', ''),
        'address': os.environ.get('ADDRESS', ''),
        'email': os.environ.get("EMAIL", ''),
        'email_password': os.environ.get("EMAIL_PASSWORD", ''),
        'whatsapp': os.environ.get("WHATSAPP", ''),
        'telegram': os.environ.get("TELEGRAM", ''),
        'phone_1': os.environ.get("PHONE_1", ''),
        'phone_2': os.environ.get("PHONE_2", ''),
    }
    if not os.path.isfile(contacts):
        with open(contacts, 'w') as file:
            json.dump(data, file, ensure_ascii=False, indent=2)



if __name__ == '__main__':
    create_data()
