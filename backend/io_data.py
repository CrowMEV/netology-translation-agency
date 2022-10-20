import os
import json


def read_json() -> dict:
    with open(
        os.path.join(os.path.dirname(__file__), 'store_data', 'data.json')
    ) as file:
        return json.load(file)


async def read_contacts() -> dict:
    data = read_json()
    del data['email_password']
    return data


async def get_credentials() -> dict:
    credentials = {}
    data = read_json()
    credentials['login'] = data.get('email', '')
    credentials['password'] = data.get('email_password', '')
    return credentials

