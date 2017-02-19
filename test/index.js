/* eslint-disable no-unused-expressions */

const request = require('request');
const sinon = require('sinon');
const expect = require('chai').expect;

const Pinboard = require('../index.js');

const MOCK_API_TOKEN = 'user:NNNNNN';
const API_RESPONSE_FIXTURE = {
  data: {},
};

describe('Pinboard', () => {
  var sandbox;
  var pinboardInstance;

  function requestGetStub(_, callback) {
    callback(null, 'RESPONSE', API_RESPONSE_FIXTURE);
  }

  beforeEach(() => {
    pinboardInstance = new Pinboard(MOCK_API_TOKEN);
    sandbox = sinon.sandbox.create();
    sandbox.stub(request, 'get', requestGetStub);
  });

  afterEach(() => {
    sandbox.restore();
  });

  Object.keys(Pinboard.prototype).forEach((methodUnderTest) => {
    describe(`#${methodUnderTest}()`, () => {
      it('should be a function', () => {
        expect(pinboardInstance[methodUnderTest]).to.be.a('function');
      });

      it('should throw error without options argument', () => {
        expect(pinboardInstance[methodUnderTest]).to.throw(Error);
      });

      it('should throw error without callback argument', () => {
        expect(pinboardInstance[methodUnderTest].bind(pinboardInstance, {})).to.throw(Error);
      });

      it('should invoke callback', () => {
        const callback = sinon.spy();
        pinboardInstance[methodUnderTest]({}, callback);
        expect(callback.called).to.be.true;
      });

      it('should pass response data as an argument to the supplied callback', () => {
        const callback = sinon.spy();
        pinboardInstance[methodUnderTest]({}, callback);
        expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
      });
    });
  });
});

