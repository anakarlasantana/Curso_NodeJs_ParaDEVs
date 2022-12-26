const { error } = require('console');
const fs = require('fs')
const path = require('path')

// Criar pasta 'test'

fs.mkdir(
path.join(__dirname, "/test"), (error) => {
    if (error) {
        return console.log("Erro: ", error);
    }
    console.log("Pasta criada com sucesso!");
});


// Criar um arquivo ou sobrescrever por completo um existente
fs.writeFile(
path.join(__dirname, '/test', 'test.txt'),
'hello world!', 
(error) => { /* Primeiro é o Path e depois o conteuso('') */ 
    if (error) {
        return console.log('Error: ', error)
    }

    console.log('Arquivo criado com sucesso!')
});

// Adicionar à um arquivo
fs.appendFile(
    path.join(__dirname, "/test", "test.txt"),
    "hello world",
    (erro) => {
        if (error) {
            return console.log("Error: ", error);
        }
        console.log("Arquivo modificado com sucesso!")
    }
);

// Fazer a leitura de um arquivo
fs.readFile(
    path.join(__dirname, "/test", "test.txt"), 
    'utf-8',
    (error, data) => {
        if (error) {
            return console.log("Error: ", error);
        }
        console.log(data  )
    })