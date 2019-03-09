let express = require('express');
let app = express();
let path = require('path');
app.use (express.static(__dirname + '/../web_pages'));


// viewed at http://localhost:8080
const startWebServer = () => {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.listen(8080);
}

exports.startWebServer = startWebServer;