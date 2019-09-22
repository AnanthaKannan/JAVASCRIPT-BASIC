require('dotenv').config({path: '../.env'});
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());
const PORT = process.env.PORT || 4000;
console.log('PORTTTTTTTT',  PORT)

const posts = [{username:'ananth', title: 'hero'},
                {username:'kannan', title: 'special'}];

app.get('/posts', authenticateToken, (req, res) =>{
    res.json(posts.filter((post => post.username === req.user.name )))
});

app.post('/login', (req, res) =>{
    const username = req.body.username;
    const user = {name: username}

   const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET );
   res.json({access_token});
});

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if(err) return res.sendStatus(403);
        req.user = user;
        next()
    })
}

app.listen(PORT, () =>{
    console.log(`Your port is running...PORT ${ PORT }`);
})