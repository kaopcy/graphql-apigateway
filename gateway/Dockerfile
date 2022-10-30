FROM node:14-alpine

WORKDIR /gateway
COPY package*.json .
RUN npm ci
COPY . .

CMD [ "node" , "app.js" ]