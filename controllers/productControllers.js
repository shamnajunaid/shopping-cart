const Products = require('../models/product');

module.exports = {
    
    create: async (request, reply) => {
      try {
        const product = request.body;
        const newProduct = await Products.create(product);
        reply.code(201).send(newProduct);
      } catch (e) {
        reply.code(500).send(e);
      }
    }, 
    fetch: async (request, reply) => {
        try {
          const products = await Products.find({}).populate('category');
          reply.code(200).send(products);
        } catch (e) {
          reply.code(500).send(e);
        }
      },
    get:async(request,reply) => {
      try {
          const product = await Products.findById(request.params.id).populate('category');
          reply.code(200).send(product);
        } catch (e) {
          reply.code(500).send(e);
        }
    }
}