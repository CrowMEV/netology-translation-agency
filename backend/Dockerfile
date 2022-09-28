FROM python:alpine3.16
WORKDIR /app
COPY ./requirements.txt .
RUN pip3 install --no-cache-dir --upgrade pip -r requirements.txt
COPY . .
CMD ["gunicorn", "app:application", "--bind", "0.0.0.0:8000", "--worker-class", "aiohttp.GunicornWebWorker", "-w", "2"]