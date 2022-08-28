'use strict';

const express = require('express');
const router = express.Router();
//時刻の取得
require('date-utils');

let dt = new Date();
let formatted = dt.toFormat("YYYY/MM/DD HH24時MI分SS秒");

// ログイン画面の表示
router.get('/', function (request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room', function (request, response, next) {
    console.log('ユーザ名：' + request.body.userName);
    response.render('room', { userName: request.body.userName, time: formatted});
});

module.exports = router;
