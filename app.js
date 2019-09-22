const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.json('hello inida')
})

app.listen(3000, () =>{
    console.log("server is running PORT 3000");
});