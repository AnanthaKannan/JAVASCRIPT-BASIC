// @ts-check

const A = (number) => {
    // for (let i=0; i < number; i++) {
    //     let a = 10;
    // }
    // return callback('error', 'complete')
    // for (let i=0; i < number; i++) {
    //   console.log(i)
    // }

    const promise = new Promise((resolve, reject) => {
      [...Array(number)].forEach((res, i) => {
        let a = 100;
      })
    resolve("hello")
    });
    return promise;

  // }
  // return fs.readFile(filePath, (error, result) => {
  //   if (error) {
  //   return callback(error, null)
  //   }
  //   return callback(null, result)
  // })
}

const B  = () => {
  console.log('Fn Start',new Date())
  const number = 9000 //result.length;

   // a callback function attached
  // A(number, (error, result) => {
  //   console.log("result", result, error)
  // })
  A(number).then((result) =>{
    console.log(result)
  })
  console.log('Fn End',new Date())
  console.log('Result is not yet back from function A')
} 

B()
