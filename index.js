const express = require('express');
const app = express();
const petsRouter = require('./routes/pets');
<<<<<<< HEAD
const servicosRouter = require('./routes/servicos');
const homeRouter = require('./routes/home');

app.set('view engine', 'ejs');
// app.set('views', './views')

app.use(homeRouter);
app.use(petsRouter);
app.use(servicosRouter);
=======

app.use(petsRouter)

app.get('/', (req, res) => {
    res.send('Inicio');
})




>>>>>>> 823b517f32c9e192bd562ec30a317b9c1d6a7499

app.listen(5000, () => console.log('servidor rodando...'))