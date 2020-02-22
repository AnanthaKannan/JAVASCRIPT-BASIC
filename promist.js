const fetchData = () =>{
    const promise = new Promise((resolve, reject) =>{
        console.log("above setTimeout");
        setTimeout(() => {
             resolve("hello inida");
        }, 2000);
        console.log("below setTimeout");
    });
    console.log("final console");
    return promise;
}

fetchData()
        .then((result) =>{
            console.log("my result", result);
        })