FROM node:13-alpine

WORKDIR /usr/src/api

COPY . /usr/src/api

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && echo "unsafe-perm = true" >> ~/.npmrc \
    && npm install --production \
    && apk del build-dependencies

EXPOSE 1337

ENV NODE_ENV production

CMD ["npm", "start"]
