/* eslint-disable no-unused-expressions */

const get = require('../dist/get');
const sinon = require('sinon');
const { expect } = require('chai');

const { default: Pinboard } = require('../dist/index.js');

const MOCK_API_TOKEN = 'user:NNNNNN';
const API_RESPONSE_FIXTURE = {
  data: {},
};

const sandbox = sinon.createSandbox();

describe('Pinboard', () => {
  let pinboardInstance;

  function requestGetStub(_, callback) {
    callback(null, API_RESPONSE_FIXTURE);
  }

  beforeEach(() => {
    pinboardInstance = new Pinboard(MOCK_API_TOKEN);
    sandbox.stub(get, 'default').callsFake(requestGetStub);
  });

  afterEach(() => {
    sandbox.restore();
  });

  const p = new Pinboard('');
  const methodKeys = Object.keys(p).filter(k => typeof p[k] === 'function');

  methodKeys.forEach(methodUnderTest => {
    describe(`#${methodUnderTest}()`, () => {
      it('should throw error without options argument', () => {
        expect(pinboardInstance[methodUnderTest]).to.throw(Error);
      });

      it('should throw error without callback argument', () => {
        expect(
          pinboardInstance[methodUnderTest].bind(pinboardInstance, {})
        ).to.throw(Error);
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
