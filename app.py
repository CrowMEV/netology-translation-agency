import aiohttp_jinja2
import jinja2
from aiohttp import web


application = web.Application(client_max_size=1024**2*50) # 50mbytes
aiohttp_jinja2.setup(application, loader=jinja2.FileSystemLoader('./templates'))
