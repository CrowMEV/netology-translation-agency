import json
import os
from hashlib import sha256
from pathlib import Path

from cryptography.fernet import Fernet


DIRECTORY_PATH = Path('store_data')
JSON_FILE = 'data.json'


def is_key():
    key = ''
    file_name = 'crypto'
    check_file = DIRECTORY_PATH / file_name
    if not check_file.is_file():
        key = Fernet.generate_key()
        with open(f'store_data/{file_name}', 'w', encoding='utf-8') as file:
            file.write(key.decode())
    else:
        with open(DIRECTORY_PATH / file_name, 'r', encoding='utf-8') as file:
            key = file.read().strip().encode()
    return key


fernet = Fernet(is_key())


def encoding(string: str):
    enstring = fernet.encrypt(string.encode())
    return enstring


def decoding(crypto_string):
    destring = fernet.decrypt(crypto_string)
    return destring


def is_data():
    data = {
        'city': os.environ.get('CITY'),
        'address': os.environ.get('ADDRESS'),
        'email': os.environ.get("EMAIL"),
        'email_password': encoding(os.environ.get("EMAIL_PASSWORD")).decode(),
        'whatsapp': os.environ.get("WHATSAPP"),
        'telegram': os.environ.get("TELEGRAM"),
        'phone_1': os.environ.get("PHONE_1"),
        'phone_2': os.environ.get("PHONE_2"),
        'admin': sha256(os.environ.get("ADMIN").encode()).hexdigest()
    }

    check_file = DIRECTORY_PATH / JSON_FILE
    if not check_file.is_file():
        with open(DIRECTORY_PATH / JSON_FILE, 'w', encoding='utf-8') as file:
            json.dump(data, file, ensure_ascii=False, indent=2)


def read_json():
    with open(DIRECTORY_PATH / JSON_FILE, 'w', encoding='utf-8') as file:
        data = json.load(file)
        del data['admin']
        data['email_password'] = decoding(data['email_password'].encode())
        return data


def get_admin_login_and_password():
    with open(DIRECTORY_PATH / JSON_FILE, 'w', encoding='utf-8') as file:
        data = json.load(file)
        return data.get('admin', '')


if __name__ == '__main__':
    is_data()
