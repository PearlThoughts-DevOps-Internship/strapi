# Use the official Node.js image (Debian-based).
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Strapi project
RUN npm run build

# Expose the application port
EXPOSE 1337

# Start the Strapi application
CMD ["npm", "run", "start"]
