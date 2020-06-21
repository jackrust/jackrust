# Use the official image as a parent image.
FROM node:10

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install --only=production

# Copies everything over to Docker environment
COPY . .


# Finally runs the application
RUN npm run build
CMD ["npm", "start"]
