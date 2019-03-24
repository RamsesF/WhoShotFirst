const uuidv1 = require('uuid/v1');
const gameRooms = [];

const createRoom = (socket) => {
  socket.on('clt-user_crt_room', function() {
    roomId = uuidv1();
    console.log('*** CLIENT IS CREATING A ROOM, ROOMID:' + roomId + ' ***');
    socket.join(roomId);

    const room = {};
    room.id = roomId;
    room.player1 = "";
    room.player2 = "";
    room.amountOfSpectators = "";
    room.joinUrl = "localhost:8080/duel.html" + "?roomId="+roomId;

    gameRooms.push(room);
    socket.emit('srv-user_join_room', roomId);
  }); 
}

const joinRoom = (socket) => {
    socket.on('clt-user_con_room', function(roomId) {
      console.log('*** CLIENT IS JOINING A ROOM, ROOMID:' + roomId + ' ***');
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
  //TODO: Construct a well thought lobby object for the client
  //TODO: Optimalize the lobby object
  socket.on('clt-user_lst_rooms', function() {
    console.log('*** CLIENT IS GETTING ROOM LIST ***');
    socket.emit('srv-srv_lst_rooms', gameRooms);
  }); 
}

const whipeEmptyRooms = () => {
  //TODO delete all the rooms with no players. 
  //TODO call this at creating rooms
  //TODO call this at deleting rooms
}

exports.createRoom = createRoom;
exports.joinRoom = joinRoom;
exports.deleteRoom = deleteRoom;
exports.listRoom = listRoom;