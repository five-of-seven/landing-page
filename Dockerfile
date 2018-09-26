# FROM mhart/alpine-node:8

# RUN mkdir -p /landing_page
# WORKDIR /landing_page
# COPY . .
# RUN npm install

# EXPOSE 3000
# CMD ["node", "src/index.js"]

# ****************************************************
# base image
FROM node:9.6.1

# set working directory
RUN mkdir /landing_page
WORKDIR /landing_page
COPY . .

# add `/landing_page/node_modules/.bin` to $PATH
ENV PATH /landing_page/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /landing_page/package.json
RUN npm install 
RUN npm install react-scripts@1.1.1 -g 

# start app
CMD ["npm", "start"]