FROM python:alpine
WORKDIR /app
COPY ./requirements.txt .
RUN pip3 install --no-cache-dir --upgrade pip -r requirements.txt
COPY . .
RUN chmod +x chmod store.py && ./store.py && +x entrypoint.sh
