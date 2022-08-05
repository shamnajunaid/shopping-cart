const posts = require('../../clouds/post.js');

const getPostsHandler = (req, reply) => {
  reply.send(posts);
};

module.exports = { getPostsHandler };