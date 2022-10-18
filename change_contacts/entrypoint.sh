#!/bin/sh

echo "Start flask dev server"
gunicorn -b 0.0.0.0:5000 app:app
