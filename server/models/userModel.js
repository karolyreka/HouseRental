var mongoose = require('mongoose'),
  schema = mongoose.Schema;

var userModel = new schema({
  username: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('userModel', userModel)
