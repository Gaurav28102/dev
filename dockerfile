FROM node 
COPY . /app
WORKDIR /app
RUN npm install express
CMD node server
