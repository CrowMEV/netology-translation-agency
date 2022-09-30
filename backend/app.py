from aiohttp import web
from aiohttp_middlewares import cors_middleware
from views.routes import setup_rout


async def web_app():
    application = web.Application(
        client_max_size=1024**2*50,
        middlewares=[
            cors_middleware(origins=["http://localhost"])
        ]
    ) #50mbytes
    setup_rout(application)
    return application
