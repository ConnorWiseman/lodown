/**
 * @file src/index.js
 */
'use strict';

/**
 * @param  {string} content
 * @return {Function}
 */
const compile = content =>
  Reflect.construct(Function, [
    [ '__', 'ctx' ],
    `'use strict'; return \`${content}\`;`
  ]);

/**
 * @return {Object}
 * @public
 */
module.exports = () => {
  const helpers  = Object.create(null);
  const register = (helper, fn)    => helpers[helper] = fn;
  const render   = (compiled, ctx) => compiled(helpers, ctx);

  return { compile, register, render };
};
