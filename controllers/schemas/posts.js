const getPostsSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          title: { type: 'string' },
         
        }
      }
    }
  }
};
module.exports = {getPostsSchema};
