
var request = require('request');
var sinon = require('sinon');
var expect = require('chai').expect;

var Pinboard = require('../index.js');
var MOCK_API_TOKEN = 'user:NNNNNN';
var API_RESPONSE_FIXTURE = {
  data: {}
};

describe('Pinboard', function() {
  var sandbox;
  var pinboardInstance;

  function requestGetStub(_, callback) {
    callback(null, 'RESPONSE', API_RESPONSE_FIXTURE);
  }

  beforeEach(function() {
    pinboardInstance = new Pinboard(MOCK_API_TOKEN)
    sandbox = sinon.sandbox.create();
    sandbox.stub(request, 'get', requestGetStub);
  });

  afterEach(function() {
    sandbox.restore();
  });

  Object.keys(Pinboard.prototype).forEach(function (methodUnderTest) {
    describe('#' + methodUnderTest + '()', function() {
      it('should be a function', function() {
        expect(pinboardInstance[methodUnderTest]).to.be.a('function');
      });

      it('should throw error without options argument', function() {
        expect(pinboardInstance[methodUnderTest]).to.throw(Error);
      });

      it('should throw error without callback argument', function() {
        expect(pinboardInstance[methodUnderTest].bind(pinboardInstance, {})).to.throw(Error);
      });

      it('should invoke callback', function() {
        var callback = sinon.spy();
        pinboardInstance[methodUnderTest]({}, callback);
        expect(callback.called).to.be.true;
      });

      it('should pass response data as an argument to the supplied callback', function() {
        var callback = sinon.spy();
        pinboardInstance[methodUnderTest]({}, callback);
        expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
      });
    });
  });
});

