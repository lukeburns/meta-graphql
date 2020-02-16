# Meta-GraphQL Server

Make calls to your GraphQL service in resolvers.

## Example

See `/example/` directory.

### `schema.js`
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

### `server.js`
```js
const metaGraphQL = require('../')
const express = require('express')
const { schema, rootValue } = require('./schema')

const app = express()
app.use('/', metaGraphQL({ schema, rootValue, graphiql: true }))
app.listen(4000)
```
