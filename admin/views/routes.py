from .views import get_from_base, save_to_base


def setup_rout(app):
    app.add_url_rule('/', view_func=get_from_base, methods=["GET"])
    app.add_url_rule('/', view_func=save_to_base, methods=["POST"])
