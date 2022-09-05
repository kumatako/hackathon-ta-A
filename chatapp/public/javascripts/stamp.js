'use strict';
//サーバに画像のURLを送信する
 function stamp() {
    let stamp = "stamp_ukareru_woman.png";
    socket.emit('sendStampEvent', stamp);

    return false;
}
function stampangry() {
    let stamp = "stamp_okoru_man.png";
    socket.emit('sendStampEvent', stamp);

    return false;
}


//サーバーから受信したスタンプを画面上に表示する
socket.on('receiveStampEvent', function(imagedata) {
    $('#thread').prepend('<p>' + '<img src="' + imagedata+ '"alt="happy" style="width: 160px; height: 160px;border-radius: 40px;background: white;margin-right: 20px;">' + '</p>');
});