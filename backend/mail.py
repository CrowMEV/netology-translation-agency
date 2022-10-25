import smtplib
from email.mime.application import MIMEApplication
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from aiohttp.web_request import FileField

from io_data import get_credentials


async def prepare_data(data: dict):
    data_dict = await get_credentials()
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
    form_dict.update(login=data_dict.get('login'))
    form_dict.update(password=data_dict.get('password'))
    return form_dict


async def send_to_current_user(
    from_: str,
    password: str,
    to: str,
    subject: str,
    **kwargs
):
    msg = MIMEMultipart()
    msg.attach(MIMEText(kwargs.get('content', ''), _charset='utf-8'))
    msg['Subject'] = subject
    msg['From'] = from_
    msg['To'] = to
    host = from_.split('@')[1]
    files = kwargs.get('files', {})
    if files:
        for filename, value in files.items():
            attachment = MIMEApplication(value)
            attachment.add_header(
                'Content-Disposition',
                'attachment',
                filename=("utf-8", "", f"{filename}")
            )
            msg.attach(attachment)

    # send mail
    smtp = smtplib.SMTP(host=f'smtp.{host}', port=25)
    smtp.starttls()
    smtp.ehlo()
    smtp.login(from_, password)
    response = smtp.send_message(msg)
    smtp.quit()
    return response


async def sending(data: dict):
    # Формируем тело письма с данными о заказчике
    content = f"""
    Заказчик: {data.get('name', '')}
    Телефон: {data.get('telephone', '')}
    Email: {data.get('email', '')}
    Перевод с: {data.get('original_l', '')}
    Перевод на: {data.get('translate_l', '')}
    Комментарий: {data.get('comment', '')}
    """
    login = data['login']
    password = data['password']
    try:
        message = await send_to_current_user(
                from_=login,
                password=password,
                to=login,
                subject="Новая заявка",
                content=content,
                files=data.get("files", {}))
    except smtplib.SMTPAuthenticationError:
        return {'data': 'Auth failed', 'status': 403}
    except smtplib.SMTPRecipientsRefused:
        return {'data': 'Bad Request', 'status': 400}
    if message:
        return message
    await send_to_current_user(
            from_=login,
            password=password,
            to=data.get('email', ''),
            subject='Заявка на перевод',
            content='Ваша заявка принята')
    return {'data': 'success', 'status': 200}
