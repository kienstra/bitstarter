var express = require('express');
var fs = require('fs');

<<<<<<< HEAD
var random = fs.readFileSync('index.html')
=======
var random = fs.readFileSync('index.html');
>>>>>>> staging

var buffed = random.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
<<<<<<< HEAD
  response.send(buffed); //used to be buffed;
})
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
=======
  response.send(buffed);
>>>>>>> staging
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
