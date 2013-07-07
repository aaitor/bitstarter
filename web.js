var express = require('express');
var fs= require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var buffer= fs.readFileSync('index.html', 'utf8');
  response.send(buffer.toString('utf8', 0, buffer.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
