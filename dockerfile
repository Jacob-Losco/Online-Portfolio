FROM node

COPY package*.json ./

RUN npm install
RUN npm install @sendgrid/mail

COPY . .

EXPOSE 8081

CMD ["npm", "start"]