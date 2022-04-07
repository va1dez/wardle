import React, { Component, useState, useEffect } from 'react';
import PlayerTwo from './PlayerTwo';
import PlayerOne from './PlayerOne';
import PlayerThree from './PlayerThree';
import PlayerFour from './PlayerFour';
import clientSocket from './clientSocket';
import GameOver from './GameOver';

const gameResult = [];

function App() {
  const [gameLoaded, loadGame] = useState(0);

  function start() {
    const roomname = document.querySelector('#roomname').value;
    if (roomname == '') return;
    clientSocket.on('connect', () => {
      clientSocket.emit('newgame', roomname, (response) => {
        if (response == 'gamefull') {
          loadGame(4);
          setTimeout(() => location.reload(), 1000);
          return;
        } else {
          loadGame(1);
        }
      });
    })
    clientSocket.on('fullgame', (response) => {
      clientSocket.players = response.filter((ele) => ele !== clientSocket.id);
      clientSocket.roomname = roomname;
      loadGame(2);
    })
    clientSocket.on('gameover', async (winID, theWord) => {
      let winner = 'lost';
      if (clientSocket.id == winID) {
        winner = 'won';
      }
      gameResult.push(winner);
      gameResult.push(theWord);
      // console.log(gameResult);
      clientSocket.disconnect();
      loadGame(3);
    })

    clientSocket.roomname = roomname;
    clientSocket.open();
  }

  const initial = (
    <div className="startpage">
      <input type="text" id="roomname" placeholder="Room Name"></input>
      <button onClick={() => start()}>Click here<br />to start!</button>
    </div>
  )

  const tooLate = (
    <div className="waiting">
      Room full.
    </div>
  )

  const waiting = (
    <div className="waiting">
      Waiting for others...
    </div>
  )
  
  const gameOver = (
    <div className="gameoverscreen">
      <GameOver winner={gameResult[0]} word={gameResult[1]} />
    </div>
  )

  const gameStart = (
    <div className="maincontainer">
      <PlayerOne />
      <PlayerTwo socket={clientSocket.players[0]}/>
      <PlayerThree socket={clientSocket.players[1]}/>
      <PlayerFour socket={clientSocket.players[2]}/>
    </div>
  )

  let final = initial;

  if (gameLoaded == 1) {
    final = waiting;
  }
  if (gameLoaded == 2) {
    final = gameStart;
  }
  if (gameLoaded == 3) {
    final = gameOver;
    // console.log(gameResult);
  }
  if (gameLoaded == 4) {
    final = tooLate;
  }

  const wrapper = (
    <div className="wrapper">
      <div className="header">
        WAR-dle
      </div>
      {final}
    </div>
  )
  return wrapper;
}

export default App;