
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

  describe('#update()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.update).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.update).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.update.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.update({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.update({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#add()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.add).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.add).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.add.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.add({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.add({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#delete()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.delete).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.delete).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.delete.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.delete({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.delete({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#get()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.get).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.get).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.get.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.get({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.get({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#dates()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.dates).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.dates).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.dates.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.dates({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.dates({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#update()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.update).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.update).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.update.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.update({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.update({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#all()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.all).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.all).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.all.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.all({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.all({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#suggest()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.suggest).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.suggest).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.suggest.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.suggest({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.suggest({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#getTags()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.getTags).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.getTags).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.getTags.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.getTags({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.getTags({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#delTag()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.delTag).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.delTag).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.delTag.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.delTag({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.delTag({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#renameTag()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.renameTag).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.renameTag).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.renameTag.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.renameTag({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.renameTag({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#userSecret()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.userSecret).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.userSecret).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.userSecret.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.userSecret({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.userSecret({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#api_token()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.api_token).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.api_token).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.api_token.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.api_token({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.api_token({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#listNotes()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.listNotes).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.listNotes).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.listNotes.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.listNotes({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should place response as callback a callback argument', function() {
      var callback = sinon.spy();
      pinboardInstance.listNotes({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });

  describe('#getNote()', function() {
    it('should be a function', function() {
      expect(pinboardInstance.getNote).to.be.a('function');
    });

    it('should throw error without options argument', function() {
      expect(pinboardInstance.getNote).to.throw(Error);
    });

    it('should throw error without callback argument', function() {
      expect(pinboardInstance.getNote.bind(pinboardInstance, {})).to.throw(Error);
    });

    it('should invoke callback', function() {
      var callback = sinon.spy();
      pinboardInstance.getNote({}, callback);
      expect(callback.called).to.be.true;
    });

    it('should pass response data as an argument to the supplied callback', function() {
      var callback = sinon.spy();
      pinboardInstance.getNote({}, callback);
      expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
    });
  });
});

