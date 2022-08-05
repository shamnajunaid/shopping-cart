const {getPostsSchema} = require('../controllers/schemas/posts.js');
const {getPostsHandler} = require('../controllers/handlers/posts.js');
const getPostsOpts = {
    schema: getPostsSchema,
    handler: getPostsHandler
}
const postRoutes = (fastify, options, done) => {
    fastify.get('/api/posts/', getPostsOpts);
    done();
  };
  module.exports = postRoutes