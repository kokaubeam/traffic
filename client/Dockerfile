FROM node:8

ENV APP_DIR /usr/src/app

RUN mkdir -p $APP_DIR
WORKDIR ${APP_DIR}

COPY . $APP_DIR

RUN npm install

CMD ["npm", "start"]