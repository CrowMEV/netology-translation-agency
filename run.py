import views
from app import application
from aiohttp import web

if __name__ == '__main__':
    web.run_app(application)
