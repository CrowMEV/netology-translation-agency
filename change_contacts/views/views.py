from flask import request, render_template, redirect, url_for, session, flash
from werkzeug.security import check_password_hash

from .base import get_data, save_data, get_login_and_password
from .auth import login_required


def login():
    return render_template("authorization.html")


def check_login():
    user_login = request.form.get('login')
    password = request.form.get('password')
    data = get_login_and_password()

    if not check_password_hash(data.get('password'), password) or \
            user_login != data.get('login'):
        flash("Неверный логин или пароль", 'login_message')
        return redirect(url_for('login'))
    session['isAuth'] = True
    session.permanent = True
    return redirect(url_for('get_base'))


@login_required
def get_from_base():
    contacts = get_data()
    return render_template("contact.html", contacts=contacts)


@login_required
def save_to_base():
    request_data = request.form
    save_data(request_data)
    return redirect(url_for('get_base'))
