var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
	
var message='Hello from server';
  res.render('pages/index', {message, message});
});


// Show page
app.get('/showpage', function(req, res) {
  res.render("pages/ShowPage");
});

//adding images to node.js express system
app.use( express.static("img"));

//adding css files for express
app.use(express.static("css"));

app.listen(8080);
console.log('Server is listening on port 8080');
