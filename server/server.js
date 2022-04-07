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
        // if (Object.prototype.hasOwnProperty.call(activeRooms, roomname)) {
        //     socket.emit('')
        // }
        gameLogic.createSession(roomname);
        socket.join(roomname);
        socket.gameRoom = roomname;
        const users = await io.in(roomname).fetchSockets();
        if (users == 2) {
            // if (Object.prototype.hasOwnProperty.call(activeRooms, roomname)) {
            //     io.to(socket.id)
            // }
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
        console.log(roomname);
        if (result !== 'notaword' && result.every((ele) => ele === 'G')) {
            io.emit('gameover', socket.id, word);
            console.log('Gameover:', roomname);
            gameLogic.deleteSession(roomname);
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


const PORT = 3000;

server.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});

//testscript
// gameLogic.createSession('therooms');
