const { GraphQLSchema, 
    GraphQLObjectType, GraphQLNonNull,
     GraphQLString, GraphQLList, GraphQLInt } = require('graphql');

const BookType = new GraphQLObjectType({
    name:'Book',
    description:'This represents a book written by author',
    fields:() =>({
      id:{ type: GraphQLNonNull(GraphQLInt)},
      name:{ type: GraphQLNonNull(GraphQLString)},
      auther_id:{ type: GraphQLNonNull(GraphQLInt)}
    })
  });
  
  const authorType = new GraphQLObjectType({
    name:'Author',
    description:'List of authors',
    fields:() =>({
      id:{ type: GraphQLNonNull(GraphQLInt)},
      name:{ type: GraphQLNonNull(GraphQLString)}
    })
  });

  const statusType = new GraphQLObjectType({
      name:'Status',
      description:'Status of the query',
      fields:() =>({ 
          name:{ type: GraphQLNonNull(GraphQLString)}
      })
  })


  module.exports = {
      BookType, authorType, statusType
  }