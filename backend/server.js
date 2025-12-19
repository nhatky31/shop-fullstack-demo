// D:\shop-fullstack\backend\server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001; // Backend chạy cổng 3001

app.use(cors()); // Cho phép Frontend gọi vào

// Dữ liệu giả lập
const products = [
    { id: 1, name: "iPhone 15 Pro Max", price: "30.000.000 VND" },
    { id: 2, name: "Samsung Galaxy S24", price: "25.000.000 VND" },
    { id: 3, name: "Laptop Gaming Dell", price: "22.000.000 VND" },
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Backend đang chạy tại: http://localhost:${PORT}`);
});