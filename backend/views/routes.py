from aiohttp import web

from views.views import send_mail, get_from_base, save_to_base


def setup_rout(app):
    app.add_routes([
        web.post('/send_mail', send_mail),
        web.get('/contact', get_from_base),
        web.post('/contact', save_to_base),
    ])
