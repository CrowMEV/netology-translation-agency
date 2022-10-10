import asyncio
import nest_asyncio
from aiohttp import web

from database.db_crud import get_contacts as get_data
from utils.mail import sending, prepare_data


nest_asyncio.apply()


async def send_mail(request) -> web.json_response:
    if not request.headers.get('Origin'):
        return web.HTTPForbidden()
    data = await request.post()
    form_dict = await prepare_data(data)
    if not form_dict:
        return web.json_response(
            'Your files weight is over 50 mb',
            status=400
        )
    send_message = asyncio.run(sending(form_dict))
    return web.json_response(**send_message)


async def get_contacts(request):
    data = await get_data()
    return web.json_response(data, status=200)
