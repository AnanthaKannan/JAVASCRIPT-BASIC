require('dotenv').config({path: '../.env'});
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());
const PORT = process.env.PORT || 4000;


const posts = [{username:'ananth', title: 'hero'},
                {username:'kannan', title: 'special'}];
let refresh_token_tbl = [];

app.get('/posts', authenticateToken, (req, res) =>{
    res.json(posts.filter((post => post.username === req.user.name )))
});

app.post('/login', (req, res) =>{
    const username = req.body.username;
    if(!posts.some((obj) => obj.username == username)){
        return res.sendStatus(401);
    }
    const user = {name: username}
    const access_token = generateAccessToken(user);
    const refresh_token = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refresh_token_tbl.push(refresh_token);  //store refreshtoken in db
   res.json({access_token, refresh_token});
});

app.post('/logout', (req, res) =>{
    refresh_token_tbl = refresh_token_tbl.filter((value) => value !== req.body.refresh_token );
    res.sendStatus(204)
})

app.post('/token_gen_using_referesh_token', (req, res) =>{
    let refresh_token = req.body.refresh_token
    if(!refresh_token) return res.sendStatus(401)
    if(!refresh_token_tbl.includes(refresh_token)) return res.sendStatus(403)
    jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
        if(err) return res.sendStatus(403)
        const access_token = generateAccessToken({ name: user.name })
        res.json({ access_token })
    })
})

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

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn : '30s'} );
}

app.listen(PORT, () =>{
    console.log(`Your port is running...PORT ${ PORT }`);
})