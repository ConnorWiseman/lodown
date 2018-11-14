/**
 * @file test/index.spec.js
 */
'use strict';

const test = require('ava');

const lodown = require('../src');

test('should be a function', t => {
  t.true(typeof lodown === 'function');
});

test('should return an object', t => {
  t.true(typeof lodown() === 'object');
});

test('returned object should have `compile()`, `register()`, `render()` methods', t => {
  const instance = lodown();

  t.true(Object.keys(instance).includes('compile'));
  t.true(typeof instance.compile === 'function');
  t.true(Object.keys(instance).includes('register'));
  t.true(typeof instance.register === 'function');
  t.true(Object.keys(instance).includes('render'));
  t.true(typeof instance.render === 'function');
});

test('`compile()` should return a function', t => {
  const { compile } = lodown();

  t.true(typeof compile('Hello, world') === 'function');
});

test('compiled template should return a string', t => {
  const { compile } = lodown();
  const compiled = compile('Hello, world');

  t.true(typeof compiled() === 'string');
});

test('compiled template should return interpolated string contents', t => {
  const { compile } = lodown();
  const compiled = compile('Hello, ${ctx.target}');

  t.true(compiled(null, {
    target: 'world'
  }) === 'Hello, world');
});

test('compiled template base contents should permit embedded JavaScript expressions', t => {
  const { compile } = lodown();
  const compiled = compile('${(() => \'Hello, world\')()}');

  t.true(compiled() === 'Hello, world');
});

test('compiled template context contents should ignore JavaScript expressions', t => {
  const { compile } = lodown();
  const compiled = compile('${ctx.expr}');

  t.true(compiled(null, {
    expr: '${(() => \'Hello, world\')()}'
  }) === '${(() => \'Hello, world\')()}');
});

test('`register()` should register a helper function', t => {
  const { compile, register, render } = lodown();
  const compiled = compile('${__.helper()}');
  register('helper', () => 'Hello, world');

  t.true(render(compiled) === 'Hello, world');
});

test('`render()` should return a string', t => {
  const { compile, render } = lodown();
  const compiled = compile('Hello, world');

  t.true(typeof render(compiled) === 'string');
  t.true(render(compiled) === 'Hello, world');
});

test('`render()` should return interpolated string contents', t => {
  const { compile, render } = lodown();
  const compiled = compile('Hello, ${ctx.target}');

  t.true(render(compiled, {
    target: 'world'
  }) === 'Hello, world');
});
