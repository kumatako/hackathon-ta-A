'use strict';


// メモを画面上に表示する
function memo() {


    //ユーザ名を取得
    const userName = $('#userName').val();
    
    // 入力されたメッセージを取得
    const message = $('#message').val();
    //メッセージのスペースを除去
    const nospacemessage = message.replace(/\s+/g, "");
    //メッセージの改行を除去
    const nokaigyoumessage = nospacemessage.replace(/\n+/g, "");

    /*//時間の取得
    require('date-utils');
    let dt = new Date();
    let formatted = dt.toFormat("YYYY/MM/DD HH24時MI分SS秒");*/
    
    //メッセージが空でないか判別
    if (nokaigyoumessage !== ""){
        // メモの内容を表示
        $('#thread').prepend('<p>' + userName + 'さんのメモ : ' + message +'</p>');
        // テキストボックスの初期化
        $('#message').val('');
    }
    else {
        alert("投稿文を入力してください");
    }

    return false;
}
