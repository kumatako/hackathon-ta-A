'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendMyNameEvent', function (data) {

        if (data !== '') {
            io.socket.emit('recieveMyNameEvent', data + 'さんが入室しました。');
        }

        
    });

    
};
