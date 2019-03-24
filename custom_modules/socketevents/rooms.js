const uuidv1 = require('uuid/v1');

const createRoom = (socket) => {
  //TODO Create room right here
  socket.on('clt-user_crt_room', function() {
    roomId = uuidv1();
    console.log("A user created a room: " + roomId);
    socket.join(roomId);
    //TODO Check here if there are two players already. If so, reject 
    //The connection.
    socket.emit('srv-user_join_room', roomId);
  }); 
}

const joinRoom = (socket) => {
    socket.on('clt-user_con_room', function(roomId) {
        roomId = uuidv1();
        console.log("A user connected in room: " + roomId);
        socket.join(roomId);
        //TODO Check here if there are two players already. If so, reject 
        //The connection.
        socket.emit('srv-user_join_room', roomId);
      }); 
}

const deleteRoom = (socket) => {
  //TODO delete room right here
}

const listRoom = (io, socket) => {
  //TODO Return all the rooms for the lobby
  socket.on('clt-user_lst_rooms', function() {
    console.log('*** LISTING THE ROOMS ***');
    console.log(io.sockets.adapter.rooms);
  }); 
}

exports.createRoom = createRoom;
exports.joinRoom = joinRoom;
exports.deleteRoom = deleteRoom;
exports.listRoom = listRoom;