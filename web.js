var express = require('express');
var fs = require('fs');

var here = buf.toString(fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
}));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString(fs.readFileSync('index.html')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
