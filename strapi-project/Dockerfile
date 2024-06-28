# Use Node.js LTS (14.x as of now) as base image
FROM node:14-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to container
COPY . .

# Expose the port Strapi runs on (default: 1337)
EXPOSE 1337

# Command to start Strapi
CMD ["npm", "run", "start"]

