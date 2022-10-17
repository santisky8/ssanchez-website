const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, 
    {
        'Content-Type': 'text/plain'
    }
    );
    res.end('Hello World');
}).listen(3000);

console.log('Server running at http://localhost:3000/');

const connect = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hellow World!')
})
app.listen(3000);

function logger(req, res, next){
    console.log(req.method, req.url);
}