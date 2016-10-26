var express = require('express');
var app = express();

// viewed at http://localhost:8080
app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log("Successful basic 200 request V1")
});

app.listen(8080);
console.log("Listening on port 8080");
