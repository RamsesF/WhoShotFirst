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

    app.get('/duel.html', function(req, res) {
        //to validate if this works
        //let roomId = req.query.n;
        res.sendFile(path.join(__dirname + '/duel.html'));
    });

    server.listen(8080);
}

exports.server = server;
exports.startWebServer = startWebServer;