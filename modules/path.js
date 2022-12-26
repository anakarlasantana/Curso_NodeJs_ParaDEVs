//**Móduloes Path**

const path = require("path")

//Basename - Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do Diretóro atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test")) //Esse path adicioneou o 'test' no modules. Quando mais adicionar parametros em aspas, ele vai adicionando no module. ex: C:\Users\AnaKarla\OneDrive - Grupo Portfolio\Documentos\Projetos\Curso_NodeJs_ParaDEVs\modules\test

