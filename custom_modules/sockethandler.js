const roomEvents = require('./socketevents/rooms');
let amountOfPlayersOnline = 0;

const startHandlingSocketEvents = (io) => {
    io.on('connection', function(socket){
        console.log('A user connected with id: ' + socket.id);
        amountOfPlayersOnline++;
        console.log('Amount of players: ' + amountOfPlayersOnline)

        socket.emit('clt-user_connected');

        roomEvents.createRoom(socket);
        roomEvents.joinRoom(socket);
        roomEvents.deleteRoom(socket);
        roomEvents.listRoom(io, socket);

        socket.on('disconnect', () => {
            console.log('A user disconnected with id: ' + socket.id);
            amountOfPlayersOnline--;
            console.log('Amount of players: ' + amountOfPlayersOnline)
        });
    });
}

exports.startHandlingSocketEvents = startHandlingSocketEvents;