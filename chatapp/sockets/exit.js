'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function (data) {
        if (!data) {
            return
        }
        socket.broadcast.emit('recieveExitEvent', data + 'さんが退出しました。');
    });
};
