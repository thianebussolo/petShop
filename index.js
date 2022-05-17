const express = require('express');
const app = express();
const petsRouter = require('./routes/pets');
const servicosRouter = require('./routes/servicos');
const homeRouter = require('./routes/home');

app.set('view engine', 'ejs');
// app.set('views', './views')

app.use(homeRouter);
app.use(petsRouter);
app.use(servicosRouter);

app.listen(5000, () => console.log('servidor rodando...'))