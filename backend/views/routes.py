from aiohttp import web

from views.views import send_mail


def setup_rout(app):
    app.add_routes([
        web.post('/send_mail', send_mail),
    ])
