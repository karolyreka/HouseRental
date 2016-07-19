var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

//var db = mongoose.connect('mongodb://connectionTo/MONGODB/goes/here');

var User = require('./models/userModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

userRouter = require('./Routes/userRouter')(User);

var apartmentRouter = require('./Routes/apartmentRouter')();

app.use('/api/apartment', apartmentRouter);

app.use('/api/getUsers', userRouter);

app.get('/', function(req, res) {
  res.send('welcome to API!');
});

app.listen(port, function() {
  console.log('running on PORT: ' + port);
});
