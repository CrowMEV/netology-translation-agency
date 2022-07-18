import smtplib
import os
from flask import request
from email import encoders
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart


def send_to_current_user(from_, password, to, subject, content, files):
    msg = MIMEMultipart()
    msg.attach(MIMEText(content))
    msg['Subject'] = subject
    msg['From'] = from_
    msg['To'] = to
    if files[0].filename and from_ == to:

        # attach files
        for file in files:
            attachment = MIMEBase('application', "octet-stream")
            attachment.set_payload(file.stream.read())
            encoders.encode_base64(attachment)
            attachment.add_header('Content-Disposition', 'attachment; filename="%s"' % file.filename)
            msg.attach(attachment)

    # send mail
    s = smtplib.SMTP(host='smtp.mail.ru', port=25)
    s.starttls()
    s.ehlo()
    s.login(from_, password)
    s.send_message(msg)
    s.quit()


def sending():
    LOGIN = os.getenv("LOGIN")
    PASSWORD = os.getenv("PASSWORD")
    user_mail = request.form['mail'].lower()
    text = request.form['text']
    files = request.files.getlist("file")
    address_list = [
        [user_mail, "Заявка на перевод", "Ваша заявка принята"],
        [LOGIN, "Новая заявка", text]
    ]
    data = None
    for item in address_list:
        try:
            send_to_current_user(LOGIN, PASSWORD, item[0], item[1], item[2], files)
        except Exception as err:
            data = "Неверный адрес электронной почты"
            break
    return data
