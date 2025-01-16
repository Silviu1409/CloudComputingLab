# Use an official Node.js runtime as the parent image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for React
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
