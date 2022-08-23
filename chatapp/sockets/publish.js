'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    
    // sendMessageEvent
    // ソケットから投稿を受信
    // receiveMessageEvent
    // 全部のソケットに送信する
    socket.on('sendMessageEvent', function (data) {
        io.sockets.emit('receiveMessageEvent',data);
    });
};
