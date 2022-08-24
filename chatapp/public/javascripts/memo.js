'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').text();
    // 入力されたメッセージを取得
    const message = $('#message').val();



    // メモの内容を表示
    $('#thread').prepend('<p>' + userName + 'さんのメモ : ' + message + '</p>');

    /*//時間の取得
    require('date-utils');
    let dt = new Date();
    let formatted = dt.toFormat("YYYY/MM//DD HH24時MI分SS秒");*/



    return false;
}
