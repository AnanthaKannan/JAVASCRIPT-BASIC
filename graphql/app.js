const express = require('express');
const expressGraphQl = require('express-graphql');
var cors = require('cors')
const { GraphQLSchema } = require('graphql');
const { RootQueryType } = require('./rootQuery');
const app = express();
app.use(cors())


const schema = new GraphQLSchema({
  query: RootQueryType
})

app.use('/graphql', expressGraphQl({
  schema:schema,
  graphiql:true,
 
}))

app.listen(8888, () =>{
  console.log('Server Running 8888');
})