var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/src'));

app.listen(port);

console.log('server running from port: '+ port);
console.log(__dirname);