# Use an official Node.js runtime
FROM node:22

# Install required dependencies for Oracle DB
RUN apt-get update && apt-get install -y libaio1 wget unzip && rm -rf /var/lib/apt/lists/*

# Download and install Oracle Instant Client
WORKDIR /opt/oracle
RUN wget https://download.oracle.com/otn_software/linux/instantclient/2360000/instantclient-basiclite-linux.x64-23.6.0.24.10.zip
RUN unzip instantclient-basiclite-linux.x64-23.6.0.24.10.zip && rm instantclient-basiclite-linux.x64-23.6.0.24.10.zip

# Set up Oracle environment
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_23_6:$LD_LIBRARY_PATH
ENV PATH=$PATH:/opt/oracle/instantclient_23_6

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application code
COPY . .

# Expose application port
EXPOSE 3002

# Start the application
CMD /bin/bash -c "sleep 10 && npm start"
