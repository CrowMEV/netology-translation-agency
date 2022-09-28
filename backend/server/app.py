from aiohttp import web


# Init app
application = web.Application(client_max_size=1024**2*50) #50mbytes
