const uuidv1 = require('uuid/v1');

const joinRoom = (socket) => {
    socket.on('clt-user_con_room', function() {
        roomId = uuidv1();
        console.log("A user connected in room: " + roomId);
        socket.emit('srv-user_join_room', roomId);
      }); 
}

exports.joinRoom = joinRoom;