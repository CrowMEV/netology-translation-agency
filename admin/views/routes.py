from .views import get_from_base, save_to_base, login, check_login


def setup_rout(app):
    app.add_url_rule('/', view_func=login, methods=["GET"])
    app.add_url_rule('/', view_func=check_login, methods=["POST"])
    app.add_url_rule('/admin/', view_func=get_from_base, methods=["GET"],
                     endpoint="get_base")
    app.add_url_rule('/admin/', view_func=save_to_base, methods=["POST"])
