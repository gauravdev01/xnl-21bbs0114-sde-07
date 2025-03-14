# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to install dependencies
COPY backend/package*.json ./

# Install the backend dependencies
RUN npm install

# Copy all files from the backend folder to the container
COPY backend/ .

# Expose the port that your backend will run on
EXPOSE 50051

# Run the server when the container starts
CMD ["node", "server.js"]
