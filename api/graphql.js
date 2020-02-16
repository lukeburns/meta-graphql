const graphqlHTTP = require('../')
const express = require('express')
const { schema, rootValue } = require('./_schema')

module.exports = graphqlHTTP({ schema, rootValue, graphiql: true })
