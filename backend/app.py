from aiohttp import web

from views.routes import setup_rout

application = web.Application(

    client_max_size=1024**2*50
) #50mbytes

if __name__ == '__main__':
    setup_rout(application)
    web.run_app(application, host='localhost', port=8000)
