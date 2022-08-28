'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    
    // sendMessageEvent
    // ソケットから投稿を受信
    // receiveMessageEvent
    // 全部のソケットに送信する
    socket.on('sendMessageEvent', function (message,userName) {
        io.sockets.emit('receiveMessageEvent',message,userName);
    });
};
