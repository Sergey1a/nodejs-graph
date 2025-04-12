const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Раздаём статику из папки dist
app.use(express.static(path.join(__dirname, 'dist')));

// Отдаём HTML по GET /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});