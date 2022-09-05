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
    const userIcon = request.body['index-icon-select'];
    console.log('選択したアイコン：' + userIcon);
    response.render('room', { userName: request.body.userName, userIcon: userIcon });

});


// ログイン画面の表示
router.get('/signup', function (request, response, next) {
    response.render('signup');
})



module.exports = router;
