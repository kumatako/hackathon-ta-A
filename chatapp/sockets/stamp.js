'use strict';

module.exports = function(socket, io) {
    socket.on('sendimage', function(imagedata) {
        io.sockets.emit('receiveimage', imagedata);
    });
};