from aiohttp import web

from server.app import application
from views import routes


if __name__ == '__main__':
    web.run_app(application, host='localhost', port=8000)
