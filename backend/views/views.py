import asyncio
import nest_asyncio
from aiohttp import web

from database.db_crud import get_contacts
from utils.mail import sending, prepare_data


nest_asyncio.apply()


async def send_mail(request) -> web.json_response:
    data = await request.post()
    form_dict = await prepare_data(data)
    if not form_dict:
        return web.json_response(
            'Your files weight is over 50 mb',
            status=400
        )
    asyncio.run(sending(form_dict))
    contacts = await get_contacts()
    return web.json_response('Success', status=200)
