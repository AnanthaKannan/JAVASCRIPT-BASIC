// https://socket.io/get-started/chat/

const express = require('express')
const PORT = 3000;
const app = express();


app.get('/', (req, res) =>{
    // res.send('<h1> hello world </h1>')
    res.sendFile(__dirname + '/view/index.html');
})

const server = app.listen(PORT, () => {
    console.log("Server listening on port " , PORT);
});

// database
let online = 0;

// connection for websocker
const io = require('socket.io')(server)
io.on( 'connection', socket =>{
    online++;
    console.log('Claint connected')
    socket.on('disconnect', () =>{
        online--;
        console.log('Claint disconnected');
    });
    socket.on('chat_message', (msg) => {
        const data = { msg, online }
        console.log('message: ' + msg, online);
        io.emit('chat_message', data);
    });
});

