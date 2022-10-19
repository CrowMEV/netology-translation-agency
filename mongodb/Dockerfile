FROM mongo:4.4.6
RUN apt-get update && apt-get install nano &&  \
    apt-get install -y python3 python3-pip
RUN pip3 install --no-cache-dir --upgrade pip
RUN pip3 install pymongo
#COPY mongo-init.js /docker-entrypoint-initdb.d/
COPY base.py .
#CMD ["python3", "base.py"]
