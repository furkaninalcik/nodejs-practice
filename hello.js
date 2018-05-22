#!/usr/bin/env nodejs
var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();

app.get('/',function (req,res){

	res.sendFile(__dirname + '/index.html');

});

/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var myReadStream = fs.createReadStream(__dirname + '/personal-website-template/index.html', 'utf8');
  myReadStream.pipe(res);
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');

*/
