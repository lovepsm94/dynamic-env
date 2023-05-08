require('dotenv').config();

const path = require('path');
const AutoLoad = require('fastify-autoload');
const fastifyCors = require('fastify-cors');

module.exports = async (fastify, opts) => {
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(fastifyCors, {
    origin: '*',
  });
  fastify
    .register(AutoLoad, {
      dir: path.join(__dirname, 'plugins'),
      options: { ...opts },
    })
    .after((error) => {
      fastify.log.info(`After plugins registration, error if any: ${error}`);
    });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { ...opts },
  });
};
