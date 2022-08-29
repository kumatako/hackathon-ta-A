'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function (data) {
        if (!data) {
            return
        }
        //時刻の取得
        require('date-utils');
        let dt = new Date();
        let formatted = dt.toFormat("YYYY/MM/DD HH24時MI分SS秒");
        socket.broadcast.emit('recieveExitEvent', data + 'さんが退出しました。' + '<' + formatted + '>');
    });
};
