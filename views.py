from dotenv import load_dotenv
from flask import render_template, request
from app import application
from mail import sending

load_dotenv()


def show_page():
    return render_template("index.html")


def send_mail():
    data = sending()
    return render_template("index.html", data=data)


application.add_url_rule('/', view_func=show_page)
application.add_url_rule('/', view_func=send_mail, methods=['POST'])
