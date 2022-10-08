import os
from datetime import timedelta

from flask import Flask

from views.views import get_from_base, save_to_base, login, check_login


# you can choose any name instead app.
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=5)


app.add_url_rule('/change_contacts/', view_func=login,
                 methods=["GET"], endpoint='login')
app.add_url_rule('/change_contacts/', view_func=check_login, methods=["POST"])
app.add_url_rule('/change_contacts/admin/', view_func=get_from_base,
                 methods=["GET"], endpoint="get_base")
app.add_url_rule('/change_contacts/admin/', view_func=save_to_base,
                 methods=["POST"])
