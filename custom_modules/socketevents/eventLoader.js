const joinRoomEvent = require('./joinRoom.js');

const loadEvents = (socket) => {
    joinRoomEvent.joinRoom(socket);
}

exports.loadEvents = loadEvents;