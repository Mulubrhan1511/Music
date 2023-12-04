# Use the official Node.js image as the base
FROM node:18.13.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port your backend application listens on (if applicable)
EXPOSE 3000

# Define the command to run your backend application
CMD [ "npm", "start" ]
