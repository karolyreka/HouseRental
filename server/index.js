var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://connectionTo/MONGODB/goes/here');
var app = express();

var port = process.env.PORT || 3000;

var router = express.Router();

router.route('/login')
  .get(function(req, res) {
    var response = {
      hello: "login failure :)"
    };
    res.json(response);
  });

app.use('/api', router);



app.get('/', function(req, res) {
  res.send('welcome to API!');
});

app.listen(port, function() {
  console.log('running on PORT: ' + port);
});
