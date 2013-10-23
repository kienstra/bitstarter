var express = require('express');
var fs = require('fs');


var random = fs.readFileSync('index.html');

var buffed = random.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  response.send(buffed); //used to be buffed;
})
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);

  response.send(buffed);

});

