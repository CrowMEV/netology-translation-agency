import json
import os


CONTACTS = os.path.join(os.path.dirname(__file__), 'store_data', 'data.json')


def read_json() -> dict:
    with open(CONTACTS) as file:
        return json.load(file)


def save_json(form_data: dict) -> None:
    data = read_json()
    data.update({key: value for key, value in form_data.items() if value})
    with open(CONTACTS, 'w') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
