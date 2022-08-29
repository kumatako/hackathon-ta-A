'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    // 投稿内容を送信
    // sendMessageEvent
    socket.emit('sendMessageEvent',message,userName);
    $('#message').val('');
    
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (message,userName,formatted) {
    
    const myUserName = $('#userName').val();
    if(myUserName === userName){
        $('#thread').prepend('<p>私の投稿：' + message + '<' + formatted + '>' + '</p>');
    }else{
        $('#thread').prepend('<p>' +userName+'さんの投稿：'+ message + '<' + formatted + '>' + '</p>');
    }
});
