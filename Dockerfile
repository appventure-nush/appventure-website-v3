FROM node:13-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV imageURL=https://appventure.nushigh.edu.sg

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=8080

COPY . /usr/src/app/
RUN npm install --production

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]
