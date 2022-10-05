from flask import request, render_template, redirect

from database.db_crud import get_data, save_data


def get_from_base():
    contacts = get_data()
    return render_template("contact.html", contacts=contacts)


def save_to_base():
    request_data = request.data
    save_data(request_data)
    return redirect('/')
