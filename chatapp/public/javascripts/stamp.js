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
socket.on('receiveStampEvent', function(stamp, userName, Icon, formatted) {
    //自分のユーザ名を取得
    const myuserName = $('#userName').val();
    const myIcon = $('#userIcon').val();
    if (myuserName == userName && myIcon == Icon) {
        $('#thread').prepend('<div class="mymessage">&ensp;<small><'+formatted+'></small>&ensp;<img class="stamp" src="' + stamp + '" style="width: 160px; height: 160px;border-radius: 40px;margin-right: 20px;"><div class="name-and-icon"><img class="icon" src="'+myIcon+'">私</div></div>');
    }
    else {
        $('#thread').prepend('<div class="othersmessage"><div class="name-and-icon"><img class="icon" src="'+Icon+'">'+userName+'</div><img class="stamp" src="' + stamp + '" style="width: 160px; height: 160px;border-radius: 40px;margin-right: 20px;">&ensp;<small><'+formatted+'></small>&ensp;</div>');
    }
    
});