FROM node:20-alpine3.17

WORKDIR /usr/src/app
RUN apk add --no-cache bash


ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget


EXPOSE 5000
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["bash", "-c", "npm install;dockerize -wait tcp://db:3306 -timeout 30s;node index.js"]
