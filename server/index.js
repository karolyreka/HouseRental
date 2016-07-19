var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://connectionTo/MONGODB/goes/here');

var User = require('./models/userModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

userRouter = require('./Routes/userRouter')(User);

app.use('/api/getUsers', userRouter);

app.get('/', function(req, res) {
  res.send('welcome to API!');
});

app.listen(port, function() {
  console.log('running on PORT: ' + port);
});
