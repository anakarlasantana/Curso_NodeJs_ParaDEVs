const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ //Criar as áreas de informação do banco de dados//
    firstName: {
        type: String,
        require: true, // require determina que o FirstName é obrigatório//
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 7,
    },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;