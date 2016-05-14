var chai = require('chai')
var chaiHttp = require('chai-http');
var server = require('../app');
var assert = chai.assert;
var should = chai.should();

chai.use(chaiHttp);

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
    it('should list ALL blobs on /blobs GET', function(done) {
      chai.request(server)
        .get('/test')
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          done();
        });
    });
  });
});
