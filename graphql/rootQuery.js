const {  GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString  } = require('graphql');
const { authorList, booksList } = require('./function');
const {  BookType, authorType, statusType } = require('./fields');

const RootQueryType = new GraphQLObjectType({
    name:'Query',
    description:'Root Query',
    fields:() =>({
      books:{
        type: new GraphQLList(BookType),
        description:'List of all books',
        resolve:() => booksList(),
      },
      author:{
        type: new GraphQLList(authorType),
        description:'List of all author',
        resolve:() => authorList(),
        reject:() => authorList()
      },
      book:{
        type:BookType,
        description: 'A single book',
        args:{
          id:{ type: GraphQLInt}
        },
        resolve: (parent, args) => booksList().find(book => book.id === args.id)
      },
      booksPagination:{
        type: new GraphQLList(BookType),
        description:'Give a page name and limits',
        args:{
          page: { type: GraphQLInt},
          limit: { type: GraphQLInt}
        },
        resolve:(parent, args) => books.slice(((args.page -1) * args.limit), (args.page * args.limit) )
      },
      status:{
          type:new GraphQLList(statusType),
          description:'Status of the query',
          resolve:()=>  { return { name: 'kannan'} }
      } 
    })
  })
  

  module.exports = {
    RootQueryType
  }