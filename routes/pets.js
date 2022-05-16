const express = requires('express')
const routers = express.Router()

router.get('/pets', (req, res) => res.send('Lista de pets'));
router.get('/pets/:id', (req, res) => res.send('Detalhes do pets: ' + req.params.id));
router.post('/pets', (req, res) => res.send('Cadastro de pet'));
router.put('/pets/:id', (req, res) => res.send('Atualização de pets: ' + req.params.id));
router.delete('/pets/:id', (req, res) => res.send('Exclusão de pets: ' + req.params.id));


module.exports = router;