FROM node:latest

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

RUN npm run prebuild

RUN npm run build

RUN npx prisma generate

EXPOSE 3000

CMD [ "node","dist/main" ]