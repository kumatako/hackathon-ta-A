'use strict';

module.exports = function (socket, io) {

    socket.on('sendmemberEvent', function(myuserName, keyuserName) {
        if (!myuserName) {
            return
        }
        io.sockets.emit('recievememberEvent', myuserName, keyuserName );

    });
};