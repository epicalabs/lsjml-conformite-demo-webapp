# Fetching the latest node image on alpine linux
FROM node:10 AS builder

# Declaring env
ENV NODE_ENV dev
# ENV NODE_ENV prod

# Setting up the work directory
WORKDIR /usr/src/app


# Installing dependencies
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm run build

# Copying all the files in our project
COPY . .

# Starting our application
EXPOSE 8080
CMD npm start