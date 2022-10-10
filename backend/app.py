import os

import aiohttp_cors as aiohttp_cors
from aiohttp import web
from views.routes import setup_rout


# async def web_app():
#     application = web.Application(
#         client_max_size=1024**2*50,
#         middlewares=[
#             cors_middleware(origins=["http://localhost"])
#         ]
#     ) #50mbytes
#     setup_rout(application)
#     return application


#---------------------------------------------------------------
# async def handler(request):
#     return web.Response(
#         text="Hello!",
#         headers={
#             "X-Custom-Server-Header": "Custom data",
#         })
#
#
# async def web_app():
#     application = web.Application(
#         client_max_size=1024**2*50,
#         # middlewares=[
#         #     cors_middleware(origins=["http://localhost"])
#         # ]
#     ) #50mbytes
#     setup_rout(application)
#
#     cors = aiohttp_cors.setup(application)
#
#     resource = cors.add(application.router.add_resource("/send_mail"))
#     cors.add(
#         resource.add_route("POST", handler), {
#             "http://localhost": aiohttp_cors.ResourceOptions(
#                 allow_credentials=True,
#                 expose_headers=("X-Custom-Server-Header",),
#                 allow_headers=("X-Requested-With", "Content-Type"),
#                 max_age=3600,
#             )
#         })
#     return application


#------------------------------------------------------------------------

#
# @web.middleware
# async def cors_middleware(request, handler):
#     response = await handler(request)
#     response.headers['Access-Control-Allow-Origin'] = os.environ.get('CORS_ALLOW_ORIGIN', '*')
#     return response


async def web_app():
    application = web.Application(
        client_max_size=1024**2*50,
    ) #50mbytes
    setup_rout(application)
    return application
