import os
from datetime import timedelta

from flask import Flask

from views.routes import setup_rout


# def flask_app():
#     application = Flask(__name__)
#     application.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
#     app.config['PERMANENT_SESSION_LIFETIME'] =  timedelta(minutes=5)
#     setup_rout(application)
#     return application

if __name__ == '__main__':
    application = Flask(__name__)
    application.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    application.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=5)
    setup_rout(application)
    application.run(host='127.0.0.1', port=8000)