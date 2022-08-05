FROM node:16-alpine

ENV REACT_APP_AUTH_SERVICE_URL http://130.104.229.91:3001

WORKDIR /usr/src/scapp-front-end

COPY package.json .

RUN npm install

COPY public public
COPY src src

CMD npm start
