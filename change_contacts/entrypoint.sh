#!/bin/sh

echo "Start flask dev server"
gunicorn --certfile=/app/ssl/live/perevod22.ru/fullchain.pem --keyfile=/app/ssl/live/perevod22.ru/privkey.pem -b 0.0.0.0:5000 app:app
                                                                                                                               