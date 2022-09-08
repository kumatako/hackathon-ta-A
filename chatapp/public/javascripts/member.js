'use strict';

socket.on('recievememberEvent', function(myuserName, keyuserName) {
    const newuserName = $('#userName').val();
    if (newuserName == keyuserName) {
        $('#thread').prepend('<p>参加中のメンバー(' + myuserName + ')</p>');

    }
    else {
        
    }

});