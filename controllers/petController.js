const petController = {
    index: (req, res) => res.send('Home'),
    create: (req, res) => req.post('Cadastro:'),
    show: (req, res) => res.send('Detalhes: ' + req.params.id),
    update: (req, res) => res.send('Atualização: ' + req.params.id),
    destroy: (req, res) => res.send('Delete: ' + req.params.id)
}

module.exports = petController;