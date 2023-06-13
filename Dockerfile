FROM node:19.5.0-alpine

WORKDIR /react-app

COPY ./package.json /react-app
RUN npm install -g npm@8.19.4
# RUN npm install

COPY . .

CMD npm start