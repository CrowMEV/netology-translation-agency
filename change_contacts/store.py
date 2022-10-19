#!/usr/bin/env python
import json
import os
from hashlib import sha256


PATH = os.path.join(os.path.dirname(__file__), 'store_data')
FILE_JSON = os.path.join(PATH, 'data.json')
CREDENTIALS = os.path.join(PATH, 'credentials')


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
    if not os.path.isfile(FILE_JSON):
        with open(FILE_JSON, 'w') as file:
            json.dump(data, file, ensure_ascii=False, indent=2)


def set_credentials() -> None:
    credentials = (
        sha256(os.environ.get("ADMIN", '')
        .encode())
        .hexdigest()
    )
    if not os.path.isfile(CREDENTIALS):
        with open(CREDENTIALS, 'w') as file:
            file.write(credentials)


def read_credentials() -> str:
    with open(CREDENTIALS) as file:
        return file.readline()

def read_json() -> dict:
    with open(FILE_JSON) as file:
        return json.load(file)


def save_json(form_data: dict) -> None:
    data = read_json()
    data.update({key: value for key, value in form_data.items() if value})
    with open(FILE_JSON, 'w') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)

    with open(FILE_JSON, 'w') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    is_data()
    set_credentials()
