const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer(
    (req, res) => {

        let{url} = req;
        console.log(req.url);

        if(url == "/posts"){
            res.statusCode = 200;
            res.setHeader('Content-type','text/plain');
            res.end('Hello posts');
        }
        else if(url == "/users"){
            res.statusCode = 200;
            res.setHeader('Content-type','text/plain');
            res.end('Hello Users');
        }

    }
);

server.listen(port, hostname);