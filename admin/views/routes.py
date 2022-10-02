from .views import get_from_base, save_to_base


def setup_rout(app):
    app.add_url_rule('/get_data', get_from_base, methods=["GET"])
    app.add_url_rule('/set_data', save_to_base, methods=["POST"])
