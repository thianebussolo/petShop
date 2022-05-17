const homeController = {
    index: (req, res) => {
        const title = 'APP EJS'
        res.render('home', { title });
    },
    login: (req, res) => {
        res.send('Login');
    }
}

module.exports = homeController;