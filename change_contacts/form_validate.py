from wtforms import Form, StringField, EmailField
from wtforms.validators import Length, Optional, Regexp


def length_message(field: str, value: int) -> str:
    return f"{field}: длина строки может быть не более {value} символов"


def number_error(field: str) -> str:
    return f"{field}: номер телефона введен неверно"


class FormModel(Form):
    city = StringField(
        validators=[
            Length(max=30, message=length_message('Город', 30)),
            Optional()
        ])
    address = StringField(
        validators=[
            Length(max=50, message=length_message('Адрес', 50)),
            Optional()]
    )
    phone_1 = StringField(
        validators=[
            Length(max=16, message=length_message('Телефон_1', 16)),
            Optional(),
            Regexp(
                r'^\+?7?\-?\d{3}\-?\d{3}\-?\d{2}\-?\d{2}$',
                message=number_error('Телефон_1')
            )
        ]
    )
    phone_2 = StringField(
        validators=[
            Length(max=16, message=length_message('Телефон_2', 16)),
            Optional(),
            Regexp(
                r'^\+?7?\-?\d{3}\-?\d{3}\-?\d{2}\-?\d{2}$',
                message=number_error('Телефон_2')
            )
        ]
    )
    whatsapp = StringField(
        validators=[
            Length(max=11, message=length_message('WhatsApp', 30)),
            Optional(),
            Regexp(
                r'^\d{11}$',  message=number_error('WhatsApp')
            )
        ]
    )
    telegram = StringField(
        validators=[
            Length(max=30, message=length_message('Telegram', 30)),
            Optional()
        ]
    )
    email = EmailField(validators=[
        Length(max=50, message=length_message('Email', 50)),
        Optional()
    ])
    password = StringField(
        validators=[
            Length(max=40, message=length_message('Email Password', 40)),
            Optional()
        ]
    )
    map_uri = StringField(validators=[
        Length(max=40, message=length_message('Яндекс карта', 40)),
        Optional()
    ])
