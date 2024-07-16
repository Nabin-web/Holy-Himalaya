FROM node:alpine

WORKDIR /holyhimalaya

COPY package*.json .
RUN npm install

CMD [ "npm",'run', 'dev' ]