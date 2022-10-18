#!/bin/sh

echo "Start aiohttp dev server"
gunicorn app:web_app, -b 0.0.0.0:8000 --worker-class aiohttp.GunicornWebWorker -w 2