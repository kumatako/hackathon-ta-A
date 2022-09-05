'use strict';

module.exports = function(socket, io) {
    socket.on('sendStampEvent', function(stamp, userName, Icon) {
        io.sockets.emit('receiveStampEvent', stamp, userName, Icon);
    });
};