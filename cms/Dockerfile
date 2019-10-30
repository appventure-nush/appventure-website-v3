FROM node:13-alpine

WORKDIR /usr/src/api

COPY . /usr/src/app

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

RUN echo "unsafe-perm = true" >> ~/.npmrc

RUN npm install -g strapi@alpha

RUN npm install --production

EXPOSE 1337

ENV NODE_ENV production

CMD ["npm", "start"]
