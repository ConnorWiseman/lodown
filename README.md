# lodown
> A templating engine powered by ES6 tagged templates.

[![npm](https://img.shields.io/npm/v/lodown.svg?style=flat-square)](https://www.npmjs.com/package/lodown) ![Node.js](https://img.shields.io/badge/node.js-%3E=_8.12.0-blue.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/ConnorWiseman/lodown/master.svg?style=flat-square)](https://travis-ci.com/ConnorWiseman/lodown)
[![Code Coverage](https://img.shields.io/codeclimate/coverage/ConnorWiseman/lodown.svg?style=flat-square)](https://codeclimate.com/github/ConnorWiseman/lodown)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/ConnorWiseman/lodown.svg?style=flat-square)](https://codeclimate.com/github/ConnorWiseman/lodown)
[![Dependencies Status](https://david-dm.org/ConnorWiseman/lodown/status.svg?style=flat-square)](https://david-dm.org/ConnorWiseman/lodown)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ConnorWiseman/lodown/blob/master/LICENSE)


## Installation

```shell
npm i lodown
```

## Usage

```javascript
const lodown = require('lodown');

const { compile, render } = lodown();

const template = compile('Hello, ${ctx.target}!');

render(template, {
  target: 'world'
});
```
