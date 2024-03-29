# base image
FROM node:12.6.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . ./
RUN npm run build
RUN npm install -g serve
CMD serve -s build

EXPOSE 5000