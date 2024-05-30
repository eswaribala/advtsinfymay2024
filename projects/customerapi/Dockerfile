FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
COPY . .
RUN npm install --force
RUN npm run build
EXPOSE 3200
CMD npm run start 3200
