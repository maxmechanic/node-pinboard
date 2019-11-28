/* eslint-disable no-unused-expressions */

const getModule = require('../dist/get');
const nock = require('nock');
const sinon = require('sinon');
const { expect } = require('chai');

const { default: Pinboard } = require('../dist/index.js');

const MOCK_API_TOKEN = 'user:NNNNNN';
const API_RESPONSE_FIXTURE = {
  data: {}
};

const sandbox = sinon.createSandbox();

describe('Get', () => {
  beforeEach(() => {});

  afterEach(() => {
    sandbox.restore();
  });

  after(() => {
    nock.restore();
  });

  it('should return a promise', done => {
    nock(getModule.API_URL)
      .get('/foo?')
      .reply(200, {});
    getModule.default({ endpoint: 'foo?' }).then(() => {
      done();
    });
  });

  it('should pass the response JSON in a promise', done => {
    const payload = { foo: 'bar' };
    nock(getModule.API_URL)
      .get('/foo?')
      .reply(200, payload);
    getModule.default({ endpoint: 'foo' }).then(result => {
      expect(result).to.deep.equal(payload);
      done();
    });
  });

  it('should call a callback if one is passed in', done => {
    nock(getModule.API_URL)
      .get('/foo?')
      .reply(200, {});
    getModule.default({ endpoint: 'foo' }, () => {
      done();
    });
  });

  it('should pass the response JSON in a callback', done => {
    const payload = { foo: 'bar' };
    nock(getModule.API_URL)
      .get('/foo?')
      .reply(200, payload);
    getModule.default({ endpoint: 'foo' }, (_err, result) => {
      expect(result).to.deep.equal(payload);
      done();
    });
  });

  it('should pass the error JSON in a callback', () => {
    nock(getModule.API_URL)
      .get('/foo?')
      .reply(500, {});
    getModule.default({ endpoint: 'foo' }, (err, _result) => {
      expect(err).to.be.truthy();
      done();
    });
  });
});

describe('Pinboard', () => {
  let pinboardInstance;

  function requestGetStub(_, callback) {
    return callback(null, API_RESPONSE_FIXTURE);
  }

  function requestGetPromiseStub(_) {
    return Promise.resolve(API_RESPONSE_FIXTURE);
  }

  const p = new Pinboard('');
  const methodKeys = Object.keys(p).filter(k => {
    return typeof p[k] === 'function';
  });

  describe('callbacks', () => {
    beforeEach(() => {
      pinboardInstance = new Pinboard(MOCK_API_TOKEN);
      sandbox.stub(getModule, 'default').callsFake(requestGetStub);
    });

    afterEach(() => {
      sandbox.restore();
    });

    methodKeys.forEach(methodUnderTest => {
      describe(`#${methodUnderTest}()`, () => {
        it('should invoke callback', () => {
          const callback = sinon.spy();
          pinboardInstance[methodUnderTest]({}, callback);
          expect(callback.called).to.be.true;
        });

        it('should pass response data as an argument to the supplied callback', () => {
          const callback = sinon.spy();
          pinboardInstance[methodUnderTest]({}, callback);
          expect(callback.firstCall.args[1]).to.deep.equal(
            API_RESPONSE_FIXTURE
          );
        });
      });
    });

    // methods that don't use pinboardMethod helper

    describe(`#delete()`, () => {
      it('should invoke callback', () => {
        const callback = sinon.spy();
        pinboardInstance.delete('url', callback);
        expect(callback.called).to.be.true;
      });

      it('should pass response data as an argument to the supplied callback', () => {
        const callback = sinon.spy();
        pinboardInstance.delete('url', callback);
        expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
      });
    });

    describe(`#suggest()`, () => {
      it('should invoke callback', () => {
        const callback = sinon.spy();
        pinboardInstance.suggest('url', callback);
        expect(callback.called).to.be.true;
      });

      it('should pass response data as an argument to the supplied callback', () => {
        const callback = sinon.spy();
        pinboardInstance.suggest('url', callback);
        expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
      });
    });

    describe(`#delTag()`, () => {
      it('should invoke callback', () => {
        const callback = sinon.spy();
        pinboardInstance.delTag('tag', callback);
        expect(callback.called).to.be.true;
      });

      it('should pass response data as an argument to the supplied callback', () => {
        const callback = sinon.spy();
        pinboardInstance.delTag('tag', callback);
        expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
      });
    });

    describe(`#listNotes()`, () => {
      it('should invoke callback', () => {
        const callback = sinon.spy();
        pinboardInstance.listNotes(callback);
        expect(callback.called).to.be.true;
      });

      it('should pass response data as an argument to the supplied callback', () => {
        const callback = sinon.spy();
        pinboardInstance.listNotes(callback);
        expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
      });
    });

    describe(`#getNote()`, () => {
      it('should invoke callback', () => {
        const callback = sinon.spy();
        pinboardInstance.getNote('id', callback);
        expect(callback.called).to.be.true;
      });

      it('should pass response data as an argument to the supplied callback', () => {
        const callback = sinon.spy();
        pinboardInstance.getNote('id', callback);
        expect(callback.firstCall.args[1]).to.deep.equal(API_RESPONSE_FIXTURE);
      });
    });
  });

  describe('promises', () => {
    beforeEach(() => {
      pinboardInstance = new Pinboard(MOCK_API_TOKEN);
      sandbox.stub(getModule, 'default').callsFake(requestGetPromiseStub);
    });

    afterEach(() => {
      sandbox.restore();
    });

    methodKeys.forEach(methodUnderTest => {
      describe(`#${methodUnderTest}()`, () => {
        it('should invoke then', done => {
          pinboardInstance[methodUnderTest]({}).then(() => {
            done();
          });
        });

        it('should pass response data as an argument to the supplied callback', done => {
          pinboardInstance[methodUnderTest]({}).then(result => {
            expect(result).to.deep.equal(API_RESPONSE_FIXTURE);
            done();
          });
        });
      });
    });

    // methods that don't use pinboardMethod helper

    describe(`#delete()`, () => {
      it('should invoke then', done => {
        pinboardInstance
          .delete('url')
          .then(() => done())
          .catch(done);
      });

      it('should pass response data as an argument to the supplied callback', done => {
        pinboardInstance.delete('url').then(result => {
          expect(result).to.deep.equal(API_RESPONSE_FIXTURE);
          done();
        });
      });
    });

    describe(`#suggest()`, () => {
      it('should invoke then', done => {
        pinboardInstance
          .suggest('url')
          .then(() => done())
          .catch(done);
      });

      it('should pass response data as an argument to the supplied callback', done => {
        pinboardInstance.suggest('url').then(result => {
          expect(result).to.deep.equal(API_RESPONSE_FIXTURE);
          done();
        });
      });
    });

    describe(`#delTag()`, () => {
      it('should invoke then', done => {
        pinboardInstance
          .delTag('tag')
          .then(() => done())
          .catch(done);
      });

      it('should pass response data as an argument to the supplied callback', done => {
        pinboardInstance.delTag('tag').then(result => {
          expect(result).to.deep.equal(API_RESPONSE_FIXTURE);
          done();
        });
      });
    });

    describe(`#listNotes()`, () => {
      it('should invoke then', done => {
        pinboardInstance
          .listNotes()
          .then(() => done())
          .catch(done);
      });

      it('should pass response data as an argument to the supplied callback', done => {
        pinboardInstance.listNotes().then(result => {
          expect(result).to.deep.equal(API_RESPONSE_FIXTURE);
          done();
        });
      });
    });

    describe(`#getNote()`, () => {
      it('should invoke then', done => {
        pinboardInstance
          .getNote('id')
          .then(() => done())
          .catch(done);
      });

      it('should pass response data as an argument to the supplied callback', done => {
        pinboardInstance.getNote('id').then(result => {
          expect(result).to.deep.equal(API_RESPONSE_FIXTURE);
          done();
        });
      });
    });
  });
});
