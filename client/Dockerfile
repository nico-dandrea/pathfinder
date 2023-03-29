# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app to /app
COPY . .

# Build the app
RUN npm run build

# Set the environment variable for the client port
ENV NODE_LISTENING_PORT=3000

# Expose the client port
EXPOSE $NODE_LISTENING_PORT

# Serve the app with a web server
CMD ["npm", "run", "serve"]