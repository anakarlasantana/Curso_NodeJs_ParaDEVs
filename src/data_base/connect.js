const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ziafybi.mongodb.net/?retryWrites=true&w=majority`,  // Não é comendado colocar senhas diretamente no código, pois é muito perigoso. Isso se resolve usando váriaveis de ambiente //
        (error) => {
            if (error) {
                return console.log('Ocorreu um erro ao se conectar com o banco de dados: ', error);
            }
            
            return console.log("Conexão ao banco de dados realizada com sucesso!")
        }
    );
};

module.exports = connectToDatabase;