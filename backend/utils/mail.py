import smtplib
import os
from email.mime.application import MIMEApplication
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from aiohttp.web_request import FileField


async def prepare_data(data: dict):
    total_size = 0
    files = {}
    form_dict = {}
    for field_name, field_value in data.items():
        if isinstance(field_value, FileField):
            file = field_value.file.read()
            total_size += len(file)
            files[field_value.filename] = file
        else:
            form_dict[field_name] = field_value
    if total_size / 1024 ** 2 > 50:
        return None
    form_dict["files"] = files
    form_dict.update(login=os.getenv("LOGIN"))
    form_dict.update(password=os.getenv("PASSWORD"))
    return form_dict


async def send_to_current_user(from_, password, to, subject, content, files):
    msg = MIMEMultipart()
    msg.attach(MIMEText(content, _charset='utf-8'))
    msg['Subject'] = subject
    msg['From'] = from_
    msg['To'] = to
    if from_ == to:

        # attach files
        for filename, value in files.items():
            attachment = MIMEApplication(value)
            attachment.add_header('Content-Disposition', 'attachment',
                                  filename=("utf-8", "", f"{filename}"))
            msg.attach(attachment)

    # send mail
    s = smtplib.SMTP(host='smtp.mail.ru', port=25)
    s.starttls()
    s.ehlo()
    s.login(from_, password)
    s.send_message(msg)
    s.quit()


async def sending(data):
    # Формируем тело письма с данными о заказчике
    message_text = f"""
    Заказчик: {data.get('name', '')}
    Телефон: {data.get('telephone', '')}
    Email: {data.get('email', '')}
    Перевод с: {data.get('original_l', '')}
    Перевод на: {data.get('translate_l', '')}
    Комментарий: {data.get('comment', '')}
    """
    address_list = [
        [data.get("login"), "Новая заявка", message_text]
    ]

    # Проверяем указал ли пользователь электронный адрес
    if data.get('email', ''):
        address_list.append(
            [data.get("email"), "Заявка на перевод", "Ваша заявка принята"]
        )
    # Отправка письма
    message = {'data': 'success', 'status': 200}
    for item in address_list:
        try:
            await send_to_current_user(
                data["login"], data["password"], item[0], item[1],
                item[2], data["files"]
            )
        except Exception as err:
            message = {'data': 'email sending error', 'status': 400}
            break
    return message
