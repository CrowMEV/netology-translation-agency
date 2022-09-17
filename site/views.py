import asyncio
import nest_asyncio
import aiohttp_jinja2
from aiohttp import web
from app import application
from mail import sending, prepare_data
from db import get_data, save_data

nest_asyncio.apply()


# async def show_page(request):
#     return aiohttp_jinja2.render_template("index.html", request, {})


async def send_mail(request) -> dict:

    # Парсим данные из реквеста
    data = await request.post()

    # Подготавливаем данные к отправке
    form_dict = await prepare_data(data)
    if form_dict == None:
        return {'error': 'Объем загружаемых файлов превышает 50 мб'}

    # Вызываем отправку почты
    loop = asyncio.get_event_loop()
    loop.create_task(sending(form_dict))
    asyncio.run(sending(form_dict))

    # return aiohttp_jinja2.render_template("index.html", request, {})
    return {'success': 'Письмо успешно отправлено'}


async def get_from_base(request) -> dict:
    db_data = await get_data()
    return db_data


async def save_to_base(request):
    # Парсим данные из реквеста
    request_data = await request.post()

    # Передаем данные на сохранение в базу
    await save_data(request_data)


application.add_routes([
    # web.get('/', show_page),
    web.post('/send_mail', send_mail),
    web.get('/contact', get_from_base),
    web.post('/contact', save_to_base),
    # #Регистрируем маршрут, чтобы отдавать статику
    # web.static('/static', "site/static")
])
