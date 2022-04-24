const http = require('http');
const hostname = '0.0.0.0';
const port = 2022;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Zeet Node');
});
server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong.', error)
    } else {
        console.log('Server running at port ' + port)
    }
});