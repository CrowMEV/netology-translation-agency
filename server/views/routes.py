from aiohttp import web

from server.app import application
from server.views.views import send_mail, get_from_base, save_to_base


application.add_routes([
    web.post('/send_mail', send_mail),
    web.get('/contact', get_from_base),
    web.post('/contact', save_to_base),
])
