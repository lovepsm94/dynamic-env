const config = (env) => {
  if (env === 'prod') return 'http://example.com/api';
  return `https://${env}.example.com/api`;
};

const getConfig = ({ hostOrigin, environment }) => {
  let env = environment;
  if (hostOrigin.includes('localhost')) {
    env = 'dev';
  } else {
    env = 'prod';
  }
  return config(env);
};

module.exports = async (fastify) => {
  fastify.get('/', async (request, reply) => {
    const { headers } = request;
    const { origin, environment } = headers;
    const apiHost = getConfig({
      hostOrigin: origin || '',
      environment,
    });
    return reply.send({ apiHost });
  });
};
