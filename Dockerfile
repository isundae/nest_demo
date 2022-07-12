FROM node:latest

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

RUN npm run build

RUN npx prisma generate

CMD [ "npm","start" ]