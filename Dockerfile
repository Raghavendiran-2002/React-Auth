FROM node:19.5.0-alpine

WORKDIR /react-app

COPY ./package.json /react-app
RUN npm install npm@7
# RUN npm install

COPY . .

CMD npm start