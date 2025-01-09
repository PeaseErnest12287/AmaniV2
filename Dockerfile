# Use the specified Node.js version (22.x) as the base image
FROM node:22-buster

# Install necessary dependencies
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your application code to the container
COPY . .

# Expose the port your application will run on
EXPOSE 3000

# Command to run your bot
CMD ["node", "index.js"]
