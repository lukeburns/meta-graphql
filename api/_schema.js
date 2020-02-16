const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello: String
    self: String
  }
`)

const rootValue = {
  hello: () => `Hello world!`,
  self: async (args, { query }) => (await query(`{ hello }`)).hello.replace('world', 'self')
}

module.exports = {
  schema,
  rootValue
}
