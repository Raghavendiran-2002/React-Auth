FROM node:19.5.0-alpine

WORKDIR /react-app

COPY ./package.json /react-app

RUN npm install -g npm@8.19.4

COPY . .

EXPOSE 3000

CMD npm start