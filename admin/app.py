from flask import Flask

from views.routes import setup_rout


def flask_app():
    application = Flask(__name__)
    setup_rout(application)
    return application
