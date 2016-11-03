var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
// 	res.send('hello');
// })

app.listen(PORT, function(){
	console.log('the magic happens on port: ' + PORT);
});