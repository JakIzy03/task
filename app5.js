const http = require('http');
const { getStudentFullName, getStudentId } = require('./student');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>About student</title>');
    res.write('</head>');
    res.write('<body>');
    res.write(`<p>My name is ${getStudentFullName()}. My student ID is ${getStudentId()}</p>`);
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});