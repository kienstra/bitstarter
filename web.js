var express = require('express');
var fs = require('fs');

var random = fs.readFileSync('index.html')


buffed = random.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffed); //used to be buffed;
});
var port = process.env.PORT || 8080; //used to be 5000: 8080 is a public port
app.listen(port, function() {
  console.log("Listening on " + port);
});

/*
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
*/
