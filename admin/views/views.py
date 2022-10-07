import os

from flask import request, render_template, redirect, url_for, session, flash

from database.db_crud import get_data, save_data
from .auth import login_required


def login():
    return render_template("authorization.html")


def check_login():
    user_login = request.form.get('login')
    password = request.form.get('password')
    if user_login != os.getenv('ADMIN_LOGIN') or \
            password != os.getenv('ADMIN_PASSWORD'):
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
