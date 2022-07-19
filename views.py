from aiohttp import web
from dotenv import load_dotenv
from app import application
from mail import sending, prepare_data
import aiohttp_jinja2

load_dotenv()


async def show_page(request):
    return aiohttp_jinja2.render_template("index.html", request, {})


async def send_mail(request):
    # Парсим данные из реквеста
    data = await request.post()

    # Подготавливаем данные к отправке
    form_dict = await prepare_data(data)

    # Вызываем отправку почты
    message = await sending(form_dict)

    return aiohttp_jinja2.render_template("index.html", request, {'data': message})


application.add_routes([
    web.get('/', show_page),
    web.post('/', send_mail),
    #Регистрируем маршрут, чтобы отдавать статику
    web.static('/static', "./static")
])
