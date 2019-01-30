var express = require("express")
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! <br> \
  	<a href="/prueba">Caro</a>');
});

app.get('/prueba', function (req, res) {
  res.send('Hello World v2 <br><a href="/..">Caro</a>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});