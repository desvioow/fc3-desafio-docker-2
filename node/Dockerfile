FROM node:20-alpine3.17

WORKDIR /usr/src/app

RUN apk add --no-cache bash

EXPOSE 5000
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["bash", "-c", "npm install;node index.js"]
