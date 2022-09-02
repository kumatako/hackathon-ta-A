'use strict';

const { application } = require('express');
const express = require('express');
const router = express.Router();

// ログイン画面の表示
router.get('/', function (request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room', function (request, response, next) {
    console.log('ユーザ名：' + request.body.userName);
    const icon = request.body['index-icon-select'];
    console.log('選択したアイコン：' + icon);
    response.render('room', { userName: request.body.userName,icon:icon});

});




module.exports = router;
