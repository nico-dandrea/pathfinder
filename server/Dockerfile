FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${NODE_CONTAINER_PORT}
CMD ["npm", "start"]