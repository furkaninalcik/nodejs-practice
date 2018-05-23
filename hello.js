var express = require('express');
var http = require('http');

var fs = require('fs');

var app = express();


app.get('/',function (req,res){

	//res.send('test 2 ');
	res.sendFile(__dirname + '/index.html');

});

app.listen(8080);

/*


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var myReadStream = fs.createReadStream(__dirname + '/personal-website-template/index.html', 'utf8');
  myReadStream.pipe(res);

}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');

*/
