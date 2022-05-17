<<<<<<< HEAD
const express = require ('express')
const router = express.Router()
=======
const express = requires('express')
const routers = express.Router()
>>>>>>> 823b517f32c9e192bd562ec30a317b9c1d6a7499

router.get('/pets', (req, res) => res.send('Lista de pets'));
router.get('/pets/:id', (req, res) => res.send('Detalhes do pets: ' + req.params.id));
router.post('/pets', (req, res) => res.send('Cadastro de pet'));
router.put('/pets/:id', (req, res) => res.send('Atualização de pets: ' + req.params.id));
router.delete('/pets/:id', (req, res) => res.send('Exclusão de pets: ' + req.params.id));


module.exports = router;