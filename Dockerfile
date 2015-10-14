FROM ubuntu:15.04

RUN apt-get update
RUN apt-get install -y git
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y mongodb

COPY . /app
WORKDIR /app

RUN sudo npm install -g bower
RUN sudo npm install
RUN sudo bower install
RUN sudo npm install forever -g

RUN mongod

EXPOSE 8080
EXPOSE 1025

ENTRYPOINT forever start server.js