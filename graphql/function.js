module.exports ={
    authorList,
    booksList,
    status
}

function authorList(){

    return new Promise((resolve, reject) =>{
        const author =[
            {id:1, name:'Ananth'},
            {id:2, name:'kannan'},
            {id:3, name:'sree'}
          ]
          console.log('inside the dat')
        return resolve(author)
    })

 const author =[
        {id:1, name:'Ananth'},
        {id:2, name:'kannan'},
        {id:3, name:'sree'}
      ]


      return author;
}

function booksList(){
 const books = [
    {id:1, name:'tamil', auther_id:1},
    {id:2, name:'english', auther_id:1},
    {id:3, name:'maths', auther_id:1},
    {id:4, name:'physics', auther_id:2},
    {id:5, name:'accounts', auther_id:2},
    {id:6, name:'bio', auther_id:3},
    {id:7, name:'science', auther_id:3},
    {id:8, name:'computer', auther_id:3},
  ];

  return books;
}

function status(){
    return {
        message:'hello',
        msgCode:'B12',
        statusCode:200
    }
}