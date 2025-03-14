# Use the official Node.js image for building the frontend
FROM node:16 AS build

# Set the working directory for the frontend build
WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the entire frontend folder
COPY frontend/ .

# Build the React app
RUN npm run build

# Serve the app using a lightweight server like serve
FROM nginx:alpine

# Copy the build folder from the first stage into the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
