module.exports = app => {
    app.get('/', (req, res) => {
        res.send("Bem vindo ao Car for Sale!")
    })
}