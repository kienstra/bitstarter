var express = require('express');
var fs = require('fs');
var buffed = fs.readFileSync('index.html').toString();
var app = express.createServer(express.logger());

app.get('/', function( request, response) {
    response.send(buffed);
});

var port = process.env.PORT || 8888;
app.listen( port , function() {
    console.log( 'Listening on ' + port );
});
