const graphqlHTTP = require('express-graphql')
const { graphql } = require('graphql')

module.exports = function (opts={}) {
  const { schema, rootValue } = opts
  return (request, response) => {
    const context = {
        query: async (query, variables) => exec(schema, rootValue, context, query, variables),
        request
    }
    return graphqlHTTP(Object.assign(opts, { context }))(request, response);
  }
}

async function exec (schema, rootValue, context={}, query, variables) {
  context = typeof context == 'object' ? context : {}
  try {
    const { data, error } = await graphql(schema, query, rootValue, context, variables)
    if (error) {
      return new Error(error)
    } else {
      return data
    }
  } catch (error) {
    return new Error(error)
  }
}
