# Meta-GraphQL Server

Make calls to your GraphQL service in your resolvers.

## Example

See `/api/` directory for an example service that can be deployed as a serverless function using [`now`](https://github.com/zeit/now).

### `_schema.js`
```js
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
```
