from hashlib import sha256

from flask import request, render_template, redirect, url_for, session, flash

# from .base import get_data, save_data, get_login_and_password
from .auth import login_required
from .store import read_json


def login():
    return render_template("authorization.html")


def check_login():
    user_login = request.form.get('login')
    password = request.form.get('password')
    form_pass = sha256(f'{user_login}:{password}'.encode()).hexdigest()
    hash_pass = get_login_and_password()
    if form_pass != hash_pass:
        flash("Неверный логин или пароль", 'login_message')
        return redirect(url_for('login'))
    session['isAuth'] = True
    session.permanent = True
    return redirect(url_for('get_base'))


@login_required
def get_from_base():
    contacts = read_json()
    return render_template("contact.html", contacts=contacts)


@login_required
def save_to_base():
    request_data = request.form
    passw = request_data['email_password']
    request_data['email_password'] = sha256(passw.encode()).hexdigest()
    save_data(request_data)
    return redirect(url_for('get_base'))
