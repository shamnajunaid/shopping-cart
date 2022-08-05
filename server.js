const fastify = require('fastify')({ logger: true });

fastify.register(require('./routes/posts'));
const port = 3000;

const startServer = async () =>{
    try {
        await fastify.listen(port);
    }
    catch(err){
        fastify.log.error(err);
        process.exit(1)
    }
}
startServer();