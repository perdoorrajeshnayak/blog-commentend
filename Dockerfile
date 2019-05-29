FROM node:8
WORKDIR /home/niveus/blog-commentend
COPY package.json /home/niveus/blog-commentend/
RUN npm install && npm install express && npm install path
COPY --from=build-env /home/niveus/blog-commentend .
CMD node server.js
EXPOSE 8080


