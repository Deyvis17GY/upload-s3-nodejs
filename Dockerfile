FROM node:12
WORKDIR /uploads3
ADD . /uploads3
RUN npm install
EXPOSE 4000
CMD npm start