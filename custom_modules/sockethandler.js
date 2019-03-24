const roomEvents = require('./socketevents/rooms');

const startHandlingSocketEvents = (io) => {
    io.on('connection', function(socket){
        console.log('A user connected with id: ' + socket.id);
        socket.emit('clt-user_connected');

        roomEvents.createRoom(socket);
        roomEvents.joinRoom(socket);
        roomEvents.deleteRoom(socket);
        roomEvents.listRoom(io, socket);
    });

    //TODO Disconnect event
}

exports.startHandlingSocketEvents = startHandlingSocketEvents;