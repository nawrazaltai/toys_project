# Use the official Node.js 14 Alpine image as the base image
FROM node:14-alpine

# Install any dependencies that your application requires
RUN apk add --no-cache git
RUN npm install -g nodemon

# Copy your application code into the container
COPY . /app

# Set the working directory to the directory where your application code is located
WORKDIR /app

# Expose the port that your application listens on
EXPOSE 3000

# Start the application
CMD ["nodemon", "index.js"]
