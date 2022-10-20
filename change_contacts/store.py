import json
import os


FILE_JSON = os.path.join(os.path.dirname(__file__), 'store_data', 'data.json')

def is_data() -> None:
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
    if not os.path.isfile(FILE_JSON):
        with open(FILE_JSON, 'w') as file:
            json.dump(data, file, ensure_ascii=False, indent=2)


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
