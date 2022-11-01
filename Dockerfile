FROM node:latest

WORKDIR /usr/src

RUN npm install nodemon -g

COPY package*.json ./
RUN npm install

COPY . .