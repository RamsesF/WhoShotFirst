let express = require('express');
let app = express();
let path = require('path');

// viewed at http://localhost:8080
const startWebServer = () => {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.listen(8080);
}

exports.startWebServer = startWebServer;