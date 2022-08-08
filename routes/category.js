const fastify = require('fastify')({ logger: true })
const Category = require('../controllers/categoryControllers');
module.exports = (fastify) => {
    //# create a note
    fastify.post('/api/categories', Category.create);
    fastify.get('/api/categories', Category.fetch);
    
  };