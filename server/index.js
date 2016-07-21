var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

// var db = mongoose.connect('mongodb://houserental:houserental123@ds023495.mlab.com:23495/houserental', function (err, db) {
// 	console.log(err);
// });

var User = require('./models/userModel');

var jwt = require('./encoding/jwt.js');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Add headers
app.use(function(req, res, next) {

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

app.post('/login', function(req, res) {
  req.user = req.body;
  var searchUser = {
    emai: req.user.email
  };
  User.findOne({
    searchUser,
    function(err, user) {
      if (err) throw err;
      if(!user)
      return res.status(401).send({message:'Wrong email/password!'});
      user.comparePasswords(req.user.password, function(err, isMatch) {
        if (err) throw err;
        if (!isMatch)
          return res.status(401).send({message:'Wrong email/password!'});
          createSendToken(user, res);
      });
    }
  })
});
app.post('/register', function(req, res) {
  var user = req.body;
  var newUser = new User({
    email: user.email,
    password: user.password
  });
  newUser.save(function(err) {
    createSendToken(newUser, res);
})
});

function createSendToken(user, res) {
  var payload = {
    sub: user.id
  }
  var token = jwt.encode(payload, "shh...");
  res.status(200).send({
    user: user.toJSON(),
    token: token
  });
}

app.listen(port, function() {
  console.log('running on PORT: ' + port);
});
