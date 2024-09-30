const express = require('express');
const cors = require('cors');
const hoteis = require('./hoteis.json');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 8080;

app.use(cors()); 
app.use(express.static(path.join(__dirname,'public')));

app.get('/hoteis', (req, res) => {
    res.json(hoteis);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

