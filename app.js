var express = require('express');
var app = express();

var colors = [ "red", "yellow", "green" ];

var data = {
	
	color: colors[0],
	delay: 200
};

var chooseColor = function() {	
	// Don't show the same color twice to make it obvious that something
	// is changing
	var filteredColors = colors.filter(function(x) { return x !== data.color; });
	
	data.color = filteredColors[Math.floor(Math.random() * filteredColors.length)];
	data.delay = Math.floor(Math.random() * 1900 + 100);
	
	console.log(data);
};

// Change the response we serve up every 10 seconds or so
setInterval(chooseColor, 10000);

app.get('/', function(req, res) {
	res.json(data);
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
	console.log('Up and running at http://%s:%s',
		server.address().address,
		server.address().port);
});