from aiohttp import web
from aiohttp_cors import setup as cors_setup, ResourceOptions

from views.views import get_contacts, send_mail


async def web_app():
    application = web.Application(
        client_max_size=1024**2*50,
    ) #50mbytes
    routes = [
        web.post('/send_mail', send_mail),
        web.get('/get_contacts', get_contacts)
    ]
    application.router.add_routes(routes)
    cors = cors_setup(
        application,
        defaults={'http://localhost': ResourceOptions(
            expose_headers="*",
            allow_headers="*",
            )
        },
    )
    for route in list(application.router.routes()):
        cors.add(route)
    return application