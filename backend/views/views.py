from aiohttp import web

from database.db_crud import get_contacts as get_data
from utils.mail import sending, prepare_data


async def get_contacts(request):
    if not request.headers.get('Origin'):
        return web.HTTPForbidden()
    data = await get_data()
    return web.json_response(data, status=200)


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
    send_message = await sending(form_dict)
    return web.json_response(**send_message)
