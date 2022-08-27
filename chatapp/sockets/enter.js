'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendMyNameEvent', function (data) {
        if (!data) {
            return
        }
        socket.broadcast.emit('recieveMyNameEvent', data + 'さんが入室しました。');
    });
};
