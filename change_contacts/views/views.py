import os

from flask import request, render_template, redirect, url_for, session, flash
from wtforms import Form, EmailField, StringField, IntegerField, validators
from wtforms.validators import Length, Optional, Regexp

from io_data import read_json, save_json
from .auth import login_required


class FormModel(Form):
    city = StringField(validators=[Length(max=30), Optional()])
    address = StringField(validators=[Length(max=50), Optional()])
    phone_1 = IntegerField(
        validators=[
            Length(max=15), Optional(),
            Regexp(r'^\+?7?\-?\d{3}\-?\d{3}\-?\d{2}\-?\d{2}$')
        ]
    )
    phone_2 = IntegerField(
        validators=[
            Length(max=15), Optional(),
            Regexp(r'^\+?7?\-?\d{3}\-?\d{3}\-?\d{2}\-?\d{2}$')
        ]
    )
    whatsapp = StringField(validators=[Length(max=50), Optional()])
    telegram = StringField(validators=[Length(max=30), Optional()])
    email = EmailField(validators=[Length(max=15), Optional()])
    password = StringField(validators=[Length(max=15), Optional()])


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
    form = FormModel()
    if form.validate():
        save_json(request.form)
    return redirect(url_for('get_base'))

