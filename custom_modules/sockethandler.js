const startHandlingSocketEvents = (io) => {
    io.on('connection', function(socket){
        console.log('A user connected with id: ' + socket.id);
        socket.emit('clt-user_connected');
      });
}

exports.startHandlingSocketEvents = startHandlingSocketEvents;