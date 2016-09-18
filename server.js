var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var firebase = require("firebase");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAGnEJFB5sQxCIeXHmB_26vFZyiUSU-614",
    authDomain: "cognomics-b7eee.firebaseapp.com",
    databaseURL: "https://cognomics-b7eee.firebaseio.com",
    storageBucket: "cognomics-b7eee.appspot.com",
};
firebase.initializeApp(config);

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"/public")));


app.post('/post-vote', function(req, res) {
    console.log("Received message: " + req.body.vote + " from " + req.body.email);
});

app.get('/ingredients', function(req, res) {
    res.send(ingredients);
});

app.post('/', function(req, res){
  var userName = req.body.userName;
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});

app.listen(3303);
