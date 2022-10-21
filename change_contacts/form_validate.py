from wtforms import Form, StringField, EmailField
from wtforms.validators import Length, Optional, Regexp


class FormModel(Form):
    city = StringField(
        validators=[
            Length(max=30, message="Длина строки не больше 30 символов"),
            Optional()
        ])
    address = StringField(
        validators=[
            Length(max=50, message="Длина строки не больше 50 символов"),
            Optional()]
    )
    phone_1 = StringField(
        validators=[
            Length(max=16, message="Длина строки не больше 16 символов"),
            Optional(),
            Regexp(
                r'^\+?7?\-?\d{3}\-?\d{3}\-?\d{2}\-?\d{2}$',
                message='Неверный номер'
            )
        ]
    )
    phone_2 = StringField(
        validators=[
            Length(max=16, message="Длина строки не больше 16 символов"),
            Optional(),
            Regexp(
                r'^\+?7?\-?\d{3}\-?\d{3}\-?\d{2}\-?\d{2}$',
                message='Неверный номер'
            )
        ]
    )
    whatsapp = StringField(
        validators=[
            Length(max=11, message="Длина строки не больше 11 символов"),
            Optional(),
            Regexp(
                r'^\d{11}$',  message='Неверный номер'
            )
        ]
    )
    telegram = StringField(
        validators=[
            Length(max=30, message="Длина строки не больше 30 символов"),
            Optional()
        ]
    )
    email = EmailField(validators=[Length(max=50), Optional()])
    password = StringField(
        validators=[
            Length(max=40, message="Длина строки не больше 40 символов"),
            Optional()
        ]
    )
