#!/bin/sh

echo "Start aiohttp dev server"
gunicorn app:web_app --certfile=/app/ssl/live/perevod22.ru/fullchain.pem --keyfile=/app/ssl/live/perevod22.ru/privkey.pem -b 0.0.0.0:8000 --worker-class aiohttp.GunicornWebWorker -w 2