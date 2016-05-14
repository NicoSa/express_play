var chai = require('chai')
var chaiHttp = require('chai-http');
var server = require('../app');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect();

chai.use(chaiHttp);

describe('Api', function() {
  it('GET /test returns array', function(done) {
    chai.request(server)
      .get('/test')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.eql([1,2,3]);
        done();
      });
  });
  it('POST /test returns the parameter you give to it', function(done) {
    chai.request(server)
      .post('/test')
      .send({lol: "hello"})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.eql('hello');
        done();
      });
  });
});
