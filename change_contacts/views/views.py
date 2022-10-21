import os

from flask import request, render_template, redirect, url_for, session, flash

from form_validate import FormModel
from io_data import read_json, save_json
from .auth import login_required


def login():
    return render_template("authorization.html")


def check_login():
    user_login = request.form.get('login')
    password = request.form.get('password')
    form_pass = f'{user_login}:{password}'
    hash_pass = os.getenv('ADMIN', '')
    if form_pass != hash_pass:
        flash("Неверный логин или пароль", 'login_message')
        return redirect(url_for('login'))
    session['isAuth'] = True
    session.permanent = True
    return redirect(url_for('get_base'))


@login_required
def get_json_data():
    contacts = read_json()
    return render_template("contact.html", contacts=contacts)


@login_required
def save_to_base():
    form = FormModel(request.form)
    if form.validate():
        save_json(request.form)
    else:
        err_message = list(form.errors.values())[0][0]
        flash(err_message, "contact_message")
    return redirect(url_for('get_base'))
