FROM node:17-alpine3.14
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci --only=production && npm cache clean --force
COPY ./dist/ /app
CMD node bundle-back.js
EXPOSE 3000