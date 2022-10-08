#!/bin/sh

echo "Start flask dev server"
gunicorn --bind 0.0.0.0:5000 app:app
