let express = require('express');
let http = require('http');
let path = require('path');

let app = express();
let server = http.createServer(app);

app.use (express.static(__dirname + '/../web_pages'));

const startWebServer = () => {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    server.listen(8080);
}

exports.server = server;
exports.startWebServer = startWebServer;