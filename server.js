var express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

// this is the line that tells our server to use the "/static" folder for static content
// app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
var userinfo;
app.get('/', function(req, res) {
  res.render('index', {
    title: "my Express project"
  })
  console.log("home???");
})

app.post('/submit', function(req, res) {
  userinfo = req.body;
  console.log(userinfo);

  res.redirect('/results');
})
app.get('/results', function(request, response) {
  response.render('results', {
    'user': userinfo
  })
});

app.listen(8050, function() {
  console.log("listening on 8050");
})
