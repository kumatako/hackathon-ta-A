'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function (data) {
        if (!data) {
            return
        }
        io.socket.emit('recieveExitEvent', data);
    });
};
