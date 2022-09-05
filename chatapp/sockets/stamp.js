'use strict';

module.exports = function(socket, io) {
    socket.on('sendStampEvent', function(imagedata) {
        io.sockets.emit('receiveStampEvent', imagedata);
    });
};