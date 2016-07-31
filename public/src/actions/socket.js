var io = require('socket.io-client');
module.exports = io.connect("http://localhost:3000");