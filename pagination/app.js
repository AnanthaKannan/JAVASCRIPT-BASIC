const express = require('express');

const app = express();
const user = require('../data/user')

app.get('/getUser', (req, res) =>{
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const startIndex = (page -1) * limit;
    const endIndex = page * limit;
    const results = {};

    results.totoalPages = { total :  user.length / limit   };
    results.result = user.slice(startIndex, endIndex);
    res.json(results)
})

app.listen(3000, () =>{
    console.log("server is running PORT 3000");
});