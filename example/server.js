const graphqlHTTP = require('../')
const express = require('express')
const { schema, rootValue } = require('./schema')

const app = express()
app.use('/', graphqlHTTP({ schema, rootValue, graphiql: true }))
app.listen(4000)
