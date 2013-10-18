var express = require('express');
var fs = require('fs');

var random = fs.readFileSync('index.html');

var buffed = random.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffed);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
