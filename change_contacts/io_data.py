import json
import os


CONTACTS = os.path.join(os.path.dirname(__file__), 'store_data', 'data.json')


def split_url(url:str) -> str:
    return url.split('/')[-1]


def read_json() -> dict:
    with open(CONTACTS) as file:
        return json.load(file)


def save_json(form_data: dict) -> None:
    data = read_json()
    form = {key: value for key, value in form_data.items() if value}
    email_uri = form.get('email_uri')
    if email_uri:
        form['email_uri'] = split_url(email_uri)
    data.update(form)
    with open(CONTACTS, 'w') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
