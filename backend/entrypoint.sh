#!/bin/sh

echo "Create storege"
python /app/init_data.py
echo "Start aiohttp dev server"
gunicorn --certfile=/app/ssl/live/perevod22.ru/fullchain.pem --keyfile=/app/ssl/live/perevod22.ru/privkey.pem app:web_app -b 0.0.0.0:8000 --worker-class aiohttp.GunicornWebWorker -w 2
