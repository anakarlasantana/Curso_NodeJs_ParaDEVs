const http = require("http");
const { getMaxListeners } = require("process");

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('<h1>home page<h1>');
    }
    //Para fazer outra página é só usar um 'if'
    if (req.url === "/users") {
        const users = [
            {
                name: "Marina Manoela",
                email: "marimano@getMaxListeners.com",
            },
            {
                name: "John Lenon",
                email: "lenojoh@gmail.com",
            },
        ];

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(users)); 

    }
})

server.listen(port, () => console.log(`Rodando na posta ${port}!`))