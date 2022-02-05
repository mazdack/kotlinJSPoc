const http = require('http');
const step1 = require("./formatAbsences");
const step2 = require("./build/js/packages/tray-custom-scripts-kotlin/kotlin/tray-custom-scripts-kotlin");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');
    // res.end(step1.step("test"));
    res.end(step2.test("yo!"));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});