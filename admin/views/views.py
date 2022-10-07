from flask import request, render_template, redirect, url_for

from database.db_crud import get_data, save_data


def login():
    return render_template("authorization.html")


def check_login():
    return redirect(url_for('get_base'))


def get_from_base():
    contacts = get_data()
    return render_template("contact.html", contacts=contacts)


def save_to_base():
    request_data = request.form
    save_data(request_data)
    return redirect(url_for('get_base'))
