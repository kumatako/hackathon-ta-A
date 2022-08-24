'use strict';

// 入室メッセージをサーバに送信する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').text();
    // 入室メッセージイベントを送信する
    if (userName !== '') {
        socket.emit('sendMyNameEvent', userName);
    } else if (userName === '') {
        window.alert('ユーザー名を入力してください！');
    }

}

// サーバから受信した入室メッセージを画面上に表示する
socket.on('recieveMyNameEvent', function (data) {
    console.log(data);
    $('#thread').append('<p>' + data + '</p>');
    $('#userName').val(data);
});
