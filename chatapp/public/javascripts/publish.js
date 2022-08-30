'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    let message = $('#message').val();
    //メッセージのスペースを除去
    const nospacemessage = message.replace(/\s+/g, "");
    //メッセージの改行を除去
    const nokaigyoumessage = nospacemessage.replace(/\n+/g, "");
    //メッセージの改行をタグに書き換え
    message = message.replace(/\n+/g, "<br>");
    //メッセージのスペースをタグに書き換え
    message = message.replace(/\s+/g, "&ensp;");
    // 投稿内容を送信
    //メッセージが空でないかの判別
    if (nokaigyoumessage !== "") {
        // sendMessageEvent
        socket.emit('sendMessageEvent',message,userName);
        $('#message').val('');
    }

    else {
        alert("投稿文を入力してください");
    }

    
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
