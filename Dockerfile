# Use the official Node.js image as the base image for the builder stage
FROM node:14 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight Nginx image for serving the React app in the final stage
FROM nginx:alpine

# Copy the built React app to the Nginx web server directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
