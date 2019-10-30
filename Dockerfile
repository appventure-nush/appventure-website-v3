FROM node:13-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install --production

RUN npm run build

EXPOSE 8080

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=8080

CMD [ "npm", "start" ]
