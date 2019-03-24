const webServer = require('./custom_modules/webserver.js');
const socketHandler = require('./custom_modules/sockethandler.js');
const io = require('socket.io').listen(webServer.server);

console.log('*************************************');
console.log('******* STARTING APPLICATION. *******');
console.log('*************************************');
console.log('');
console.log('');

console.log('STARTING SOCKET.IO...');
socketHandler.startHandlingSocketEvents(io);
console.log('');

console.log('STARTING WEBSERVER...');
webServer.startWebServer();