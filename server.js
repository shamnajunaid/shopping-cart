const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
const port = 3000;

const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
categoryRoutes(fastify)
productRoutes(fastify)
try {
    mongoose.connect('mongodb+srv://admin:IGbq42kIqmkG8dzg@cluster0.vk70in5.mongodb.net/shopping_cart?retryWrites=true&w=majority').then(
         async () =>{
                try {
                    await fastify.listen(port);
                }
                catch(err){
                    fastify.log.error(err);
                    process.exit(1)
                }
            })
  } catch (e) {
    console.error(e);
  }
