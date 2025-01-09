FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*
  
COPY package.json .


RUN npm install pm2 -g
RUN npm install --legacy-peer-deps
RUN nvm install 22
RUN nvm use 22


COPY . .

EXPOSE 3000

CMD ["node","index.js" ]
