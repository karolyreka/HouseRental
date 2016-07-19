var express = require('express');

var routes = function(User) {
  var userRouter = express.Router();

  userRouter.route('/login')
    .get(function(req, res) {
      var response = {
        hello: "login failure :)"
      };
      res.json(response);
    });


  userRouter.route('/')
    .post(function(req, res) {
      var user = new User(req.body);
      user.save();
      console.log(user);
      res.status(201).send(user);
    })
    .get(function(req, res) {
      var jsonFilter = req.query;
      User.find(jsonFilter, function(err, user) {
        if (err) {
          res.status(500).send(err);
          //console.log(err);
        } else {
          res.json(user);
        }
      });
    });

  userRouter.route('/:userid')
    .get(function(req, res) {

      User.find(req.paras.userid, function(err, user) {
        if (err) {
          res.status(500).send(err);
          //console.log(err);
        } else {
          res.json(user);
        }
      });
    });

    return userRouter;
};

module.exports = routes;
