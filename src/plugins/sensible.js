const fp = require('fastify-plugin');
const sensible = require('fastify-sensible');

/**
 * This plugin adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async (fastify) => {
  fastify.register(sensible, {
    errorHandler: false,
  });
});
