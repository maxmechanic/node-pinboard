# node-pinboard

[![npm package](https://img.shields.io/npm/v/node-pinboard.svg?style=flat-square)](https://www.npmjs.org/package/node-pinboard)
[![Build Status](https://travis-ci.org/maxmechanic/node-pinboard.svg?branch=master)](https://travis-ci.org/maxmechanic/node-pinboard)

A Node.js wrapper for the Pinboard API.

### Installation

    npm install node-pinboard

### Available functions

node-pinboard follows the [Pinboard v1 API](https://pinboard.in/api/) with [token auth](https://pinboard.in/api/#authentication) (token can be found on [settings/password](https://pinboard.in/settings/password)).

### Tests

    npm test

To determine code coverage:

    npm run coverage

### Examples

```javascript
const Pinboard = require('node-pinboard');
const api_token = 'user:NNNNNN';

const pinboard = new Pinboard(api_token);

const options = {
  url: 'https://github.com/mikeal/request',
  description: ' mikeal / request',
  tags: 'git,node-pinboard,test',
  toread: 'yes'
};

pinboard.add(options, (err, res) => {
  console.log(res);
  //{ result_code: 'done' }
});

pinboard.get({ tag: 'node-pinboard' }, (err, res) => {
  console.log(res);
  //date: date,
  //user: 'user',
  //posts:
  //[ { href: 'https://github.com/mikeal/request',
  //description: 'mikeal / request',
  //extended: '',
  //meta: 'meta',
  //hash: 'hash',
  //time: 'time',
  //shared: 'no',
  //toread: 'yes',
  //tags: 'git node-pinboard test' } ] }
});

// promise version

pinboard.get({ tag: 'node-pinboard' }).then(res => {
  console.log(res);
});
```
