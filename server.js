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

var animals = [
    "puppy",
    "kitten",
    "ferocious bear",
    "penguin"
];

var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];

app.post('/deposit-cogbucks', function(req, res) {
    //res.send(animals);
    console.log("Received message: " + req.body.foo);
    firebase.database().ref().child('players').child(0).child('cogbucks').set(0);
});

app.post('/post-vote', function(req, res) {
    console.log("Received message: " + req.body.vote);
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

app.listen(6060);
