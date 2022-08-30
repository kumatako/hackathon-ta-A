'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $('#userName').val();
// 入室メッセージイベントを送信する
if (userName !== '') {
    socket.emit('sendMyNameEvent', userName);
}



// サーバから受信した入室メッセージを画面上に表示する
socket.on('recieveMyNameEvent', function (data) {
    console.log(data);

    $('#thread').prepend('<p>' + data + '</p>');
});
