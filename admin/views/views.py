from flask import request

from database.db_crud import get_data, save_data


def get_from_base() -> dict:
    db_data = get_data()
    return db_data


def save_to_base():
    request_data = request.data
    save_data(request_data)
