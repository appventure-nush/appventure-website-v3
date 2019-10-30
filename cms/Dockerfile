FROM node:13-alpine

WORKDIR /usr/src/api

RUN echo "unsafe-perm = true" >> ~/.npmrc

RUN npm install -g strapi@alpha

RUN npm install --production

RUN npm build

EXPOSE 1337

ENV NODE_ENV production

CMD ["npm", "start"]
