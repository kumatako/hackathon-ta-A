'use strict';
//サーバに画像のURLを送信する
 function stamp() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_ukareru_woman.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}
function stampangry() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_okoru_man.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}


//サーバーから受信したスタンプを画面上に表示する
socket.on('receiveStampEvent', function(stamp, userName, Icon) {
    //自分のユーザ名を取得
    const myuserName = $('#userName').val();
    const myIcon = $('#userIcon').val();
    if (myuserName == userName) {
        $('#thread').prepend('<p> <img src="' + myIcon + '"alt=""style="width: 45px;height: 45px;border-radius: 22.5px;border: 1px solid lightgray;margin-right: 10px;">私:&ensp;' + '<img src="' + stamp + '"alt="happy" style="width: 160px; height: 160px;border-radius: 40px;background: white;margin-right: 20px;">' + '</p>');
    }
    else {
        $('#thread').prepend('<p> <img src="' + Icon + '"alt=""style="width: 45px;height: 45px;border-radius: 22.5px;border: 1px solid lightgray;margin-right: 10px;">' + userName + ":&ensp;" + '<img src="' + stamp + '"alt="happy" style="width: 160px; height: 160px;border-radius: 40px;background: white;margin-right: 20px;">' + '</p>');
    }
    
});