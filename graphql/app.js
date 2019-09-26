const author =[
  {id:1, name:'Ananth'},
  {id:2, name:'kannan'},
  {id:3, name:'sree'}
]

const books = [
  {id:1, name:'tamil', auther_id:1},
  {id:2, name:'english', auther_id:1},
  {id:3, name:'maths', auther_id:1},
  {id:4, name:'physics', auther_id:2},
  {id:5, name:'accounts', auther_id:2},
  {id:6, name:'bio', auther_id:3},
  {id:7, name:'science', auther_id:3},
  {id:8, name:'computer', auther_id:3},
]

const express = require('express');
const expressGraphQl = require('express-graphql');
const { GraphQLSchema, 
  GraphQLObjectType, GraphQLNonNull,
   GraphQLString, GraphQLList, GraphQLInt } = require('graphql');

const app = express();

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

const RootQueryType = new GraphQLObjectType({
  name:'Query',
  description:'Root Query',
  fields:() =>({
    books:{
      type: new GraphQLList(BookType),
      description:'List of all books',
      resolve:() => books
    },
    author:{
      type: new GraphQLList(authorType),
      description:'List of all author',
      resolve:() => author
    },
    book:{
      type:BookType,
      description: 'A single book',
      args:{
        id:{ type: GraphQLInt}
      },
      resolve: (parent, args) => books.find(book => book.id === args.id)
    },
    booksPagination:{
      type: new GraphQLList(BookType),
      description:'Give a page name and limits',
      args:{
        page: { type: GraphQLInt},
        limit: { type: GraphQLInt}
      },
      resolve:(parent, args) => books.slice(((args.page -1) * args.limit), (args.page * args.limit) )
    } 
  })
})

const schema = new GraphQLSchema({
  query: RootQueryType
})

app.use('/graphql', expressGraphQl({
  schema:schema,
  graphiql:true
 
}))

app.listen(8888, () =>{
  console.log('Server Running 8888');
})