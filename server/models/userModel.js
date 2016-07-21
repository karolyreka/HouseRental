var mongoose = require('mongoose'),
  bcryptjs = require('bcryptjs'),
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
  email: {
    type: String
  },
  password: {
    type: String
  }
});

userModel.methods.toJSON = function(){
  var user = this.toObject();
  delete user.password;
  return user;

}
userModel.methods.comparePasswords = function(password, callback){
  bcryptjs.compare(password, this.password, callback);
}
userModel.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcryptjs.genSalt(10, function(err, salt){
    if (err) return next(err);
    bcryptjs.hash(user.password, salt, function(err, hash){
        if (err) return next(err);
        user.password = hash;
        next();
    })
  })
})
module.exports = mongoose.model('userModel', userModel);
