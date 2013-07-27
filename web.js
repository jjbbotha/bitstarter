var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  var stuff = fs.readFileSync("index.html");
  var buf = new Buffer(stuff);
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
