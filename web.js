var express = require('express');
var fs = require('fs');

var here = buf.toString(fs.readFileSync('/bitstarter/index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
}));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('here');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
