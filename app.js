var express = require('express');
var app = express();
var logger = require('intel');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;

server.listen(port, '127.0.0.1', function () {
    var address = server.address();
    logger.info('Server starting on ' + address.address + ':' + address.port);
});

app.get('/', function (req, res) {
    // TODO: Придумать как реализовать декомпозицию
    res.send('All be good');
});