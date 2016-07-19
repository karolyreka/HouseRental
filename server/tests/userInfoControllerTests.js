var should = require('should'),
  sinon = require('sinon');

describe('User Controller tests:', function() {
  describe('post', function() {
    it('should not allow an empty firstName on post', function() {
      var User = function(user) {
        this.save = function() {}
      };

      var req = {
        body: {
          firstName: ''
        }
      };

      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      };
      var userInfoController = require('../controllers/userInfoController')(User);

      userInfoController.post(req, res);

      res.status.calledWith(400).should.equal(true, 'bad status' + res.status.args[0][0]);
      res.send.calledWith('firstName is required').should.equal(true);

    })
  });
});
