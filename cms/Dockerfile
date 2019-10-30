FROM strapi/base

WORKDIR /api

COPY ./package.json ./

RUN npm install -g strapi@alpha
RUN npm install --production

COPY . .

RUN npm build

EXPOSE 1337

ENV NODE_ENV production

CMD ["npm", "start"]
