'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = '';
    // 入力されたメッセージを取得
    const message = $('#message').val();
    // 投稿内容を送信
    // sendMessageEvent
    socket.emit('sendMessageEvent',message);

    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
