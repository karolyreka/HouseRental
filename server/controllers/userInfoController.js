var userInfoController = function(User) {
  var post = function(req, res) {
    var user = new User(req.body);
    if (!req.body.firstName) {
      res.status(400);
      res.send('firstName is required');
    } else {
      user.save();
      res.status(201);
      res.send(user);
    }
  }

  var get = function(req, res) {
    var jsonFilter = req.query;
    User.find(jsonFilter, function(err, user) {
      if (err) {
        res.status(500);
        res.send(err);
        //console.log(err);
      } else {
        res.json(user);
      }
    });
  }
  return {
    post: post,
    get: get
  };
};

module.exports = userInfoController;
