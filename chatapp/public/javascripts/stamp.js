'use strict';

function ImageToBase64(img, mime_type) {
    // New Canvas
    var canvas = document.createElement('canvas');
    canvas.width  = img.width;
    canvas.height = img.height;
    // Draw Image
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    // To Base64
    return canvas.toDataURL(mime_type);
}
//スタンプをサーバーに送信する
function stamp() {
    var img = document.getElementById("MyImg");
    var b64 = ImageToBase64(img, "image/jpeg");
    socket.emit('sendimage', b64);

}

//サーバーから受信したスタンプを画面上に表示する
socket.on('receiveimage', function(imagedata) {
    if (imagedata) {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        let img = new Image();
        img.src = imagedata;
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, 640, 480);
            document.body.appendChild(canvas);
        }
    }
    return false;
})