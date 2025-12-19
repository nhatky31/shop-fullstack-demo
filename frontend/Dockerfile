# Dùng Node.js
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Mở cổng 3000
EXPOSE 3000

# Chạy React ở chế độ Development
CMD ["npm", "start"]