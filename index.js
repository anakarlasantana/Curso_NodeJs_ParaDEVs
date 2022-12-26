//const { Person } = require("./person")
const dotenv = require('dotenv');

const connectToDatabase = require("./src/data_base/connect");

dotenv.config();

connectToDatabase();
 
//require("./modules/path");
//require("./modules/fs");
//require("./modules/http.js");

//require("./modules/express.js");

//const person = new Person("Ana");
