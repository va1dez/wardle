const path = require('path');
const express = require('express');
const gameLogic = require('./gameLogic');
const app = express();
const { Server } = require('socket.io');
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://20.62.2.105"
    }
});
const activeRooms = {};

app.use(express.json());
app.use(express.static(path.resolve(DIST_DIR, '../dist')));

app.get('/wordle', (req, res) => {
    res.send(gameLogic.test('therooms', req.body.guess));
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, '../dist/index.html'));
});

io.on('connection', (socket) => {
    console.log('A user connected!');
    console.log(socket.id);
    
    socket.on('newgame', async (roomname) => {
        gameLogic.createSession(roomname);
        socket.join(roomname);
        socket.gameRoom = roomname;
        const users = await io.in(roomname).fetchSockets();
        console.log(users.length);
        if (users.length === 4) {
            const listID = [];
            for (let user of users) {
                listID.push(user.id);
            }
            io.to(roomname).emit('fullgame', listID);
        }
    })

    socket.on('checkword', (roomname, word, cb) => {
        const result = gameLogic.test(roomname, word);
        cb(result);
        console.log(result);
        if (result !== 'notaword' && result.every((ele) => ele === 'G')) {
            io.to(roomname).emit('gameover', socket.id);
        }
    })

    socket.on('update', (roomname, newStatus) => {
        io.to(roomname).emit('redraw', newStatus, socket.id);
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected');
        const quitGame = new Array(30).fill('box out');
        io.to(socket.gameRoom).emit('redraw', quitGame, socket.id);
    })
})


const PORT = 80;

server.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});

//testscript
// gameLogic.createSession('therooms');
