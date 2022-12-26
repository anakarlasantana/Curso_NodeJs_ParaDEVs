const express = require('express')
const UserModel = require('../src/moduls/user.model')

const App = express()

App.use(express.json());


// Criar outra página atraves de requisição por 'get'
App.get('/users', async (req, res) => { // EndPoont para pegar as informações adicionadas no bd
    try {
        const users = await UserModel.find({}) // {} Filtro que podemos selecionar alguma propriedade do db. Se o {} estiver fazio significa que ele vai trazer todas as informações do db.
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

// Criar um endpoint para pegar o usuário a partir da ID
App.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id);

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})


// Para criar alguma coisa no nos bd é só usar POST
App.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user);
    
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// Criar um endpoint para atualizar informação de usuário
App.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true });
         res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

const port = 8080;

App.listen(port, () => console.log(`Rodando com Express na porta ${port}! `));