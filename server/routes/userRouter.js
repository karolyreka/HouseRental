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

  userRouter.use('/:userid', function(req, res, next) {
    User.findById(req.paras.userid, function(err, user) {
      if (err) {
        res.status(500).send(err);
        //console.log(err);
      } else if (user) {
        req.user = user;
        next();
      } else {
        res.status(404).send('no user found');
      }
    });
  });

  userRouter.route('/:userid')
    .get(function(req, res) {
      res.json(req.user);
    })
    .put(function(req, res) {
      req.user.username = req.body.username;
      req.user.firstName = req.body.firstName;
      req.user.lastName = req.body.lastName;
      req.user.password = req.body.password;
      req.user.save(function(err) {
        if (err)
          res.status(500).send(err);
        else
          res.json(req.user);
      });
      res.json(req.user);
    })
    .patch(function(req, res) {
      if (req.user._id)
        delete req.body._id
      for (var p in req.body) {
        req.user[p] = req.body[p];
      }
      req.user.save(function(err) {
        if (err)
          res.status(500).send(err);
        else
          res.json(req.user);
      })
      .delete(function(req,res){
        req.user.remove(function(err) {
          if (err)
            res.status(500).send(err);
          else
            res.status(204).send('removed');
        });
      });
    });

  return userRouter;
};

module.exports = routes;
