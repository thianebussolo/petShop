const express = require('express');
const app = express();
const petsRouter = require('./routes/pets');

app.use(petsRouter)

app.get('/', (req, res) => {
    res.send('Inicio');
})





app.listen(5000, () => console.log('servidor rodando...'))