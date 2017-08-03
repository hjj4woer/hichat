var express = require('express');
var router = express.Router();
var socket = require('socket.io');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

var app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
server.listen(80);
io.on('connection', function (socket) {
  socket.on('foo', function (socket) {
    console.log(data);
  })
})

module.exports = router;
