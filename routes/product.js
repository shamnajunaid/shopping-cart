const fastify = require('fastify')({ logger: true })
const Product = require('../controllers/productControllers');
module.exports = (fastify) => {
    //# create a note
    fastify.post('/api/products', Product.create);
    fastify.get('/api/products', Product.fetch);
    fastify.get('/api/products/:id', Product.get);
  };