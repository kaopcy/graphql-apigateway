FROM node:14-alpine

WORKDIR /server
COPY package*.json .
RUN npm ci

COPY . .

CMD [ "node" , "app.js" ]