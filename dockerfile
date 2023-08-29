FROM node 
COPY . /app
WORKDIR /app
CMD nodejs server