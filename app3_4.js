const http = require('http');
const { getStudentFullName, getStudentId } = require('./student');

console.log(`My name is ${getStudentFullName()}. My student ID is ${getStudentId()}`);

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${getStudentFullName()}. My student ID is ${getStudentId()}`);
});