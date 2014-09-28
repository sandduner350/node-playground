var http = require('http')

console.log ('starting server');

var express = require('express')
var app = express();

var route = require('./route')

route.init(app)



var server = app.listen(3000, function() {
	console.log('listening on port%d', server.address().port);
});