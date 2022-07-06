import smtplib
import os
from email.message import EmailMessage
from dotenv import load_dotenv
from flask import render_template, request
from app import application

load_dotenv()

LOGIN = os.getenv("LOGIN")
PASSWORD = os.getenv("PASSWORD")


def show_page():
    return render_template("index.html")


def send_mail():
    user_mail = request.form['mail']
    text = request.form['text']

    s = smtplib.SMTP(host='smtp.mail.ru', port=25)
    s.starttls()
    s.ehlo()
    s.login(LOGIN, PASSWORD)
    # send mail to firm
    s.sendmail(LOGIN, LOGIN, text)
    # send mail to client
    s.sendmail(LOGIN, user_mail, "Ваша заявка принята")
    s.quit()
    return render_template("index.html")


application.add_url_rule('/', view_func=show_page)
application.add_url_rule('/', view_func=send_mail, methods=['POST'])
