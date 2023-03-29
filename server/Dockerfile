FROM node:alpine
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${NODE_CONTAINER_PORT}
ENTRYPOINT [ "node" ,"server.js"]