import asyncio
import nest_asyncio
from aiohttp import web

from utils.mail import sending, prepare_data
from database.db_crud import get_data, save_data


nest_asyncio.apply()


async def send_mail(request) -> web.json_response:
    data = await request.post()
    form_dict = await prepare_data(data)
    if not form_dict:
        return web.Response(
            text="Объем загружаемых файлов превышает 50 мб"
        )
    asyncio.run(sending(form_dict))
    return web.Response(
        text="Письмо отпралено"
    )


async def get_from_base(request) -> dict:
    db_data = await get_data()
    return db_data


async def save_to_base(request):
    request_data = await request.post()
    await save_data(request_data)
