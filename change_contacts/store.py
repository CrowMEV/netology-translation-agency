#!/usr/bin/env python
import json
import os
from hashlib import sha256


FILE = os.path.join(os.path.dirname(__file__), 'store_data', 'data.json')


def is_data() -> None:
    data = {
        'city': os.environ.get('CITY', ''),
        'address': os.environ.get('ADDRESS', ''),
        'email': os.environ.get("EMAIL", 'dfdsf'),
        'email_password': os.environ.get("EMAIL_PASSWORD", ''),
        'whatsapp': os.environ.get("WHATSAPP", ''),
        'telegram': os.environ.get("TELEGRAM", ''),
        'phone_1': os.environ.get("PHONE_1", ''),
        'phone_2': os.environ.get("PHONE_2", ''),
    }
    if not os.path.isfile(FILE):
        with open(FILE, 'w') as file:
            json.dump(data, file, ensure_ascii=False, indent=2)


def set_credentials() -> None:
    credentials = (
        sha256(os.environ.get("ADMIN", '')
        .encode())
        .hexdigest()
    )
    os.environ['ADMIN'] = credentials


def read_json() -> dict:
    with open(FILE) as file:
        return json.load(file)


def save_json(**kwargs) -> None:
    data = read_json()
    for key, value in kwargs:
        data.setdefault(key, value)

    with open(FILE, 'w') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    is_data()
    set_credentials()
