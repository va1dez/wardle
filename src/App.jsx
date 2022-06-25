import React, { Component, useState, useEffect } from 'react';
import PlayerTwo from './PlayerTwo';
import PlayerOne from './PlayerOne';
import PlayerThree from './PlayerThree';
import PlayerFour from './PlayerFour';
import clientSocket from './clientSocket';
import GameOver from './GameOver';

const gameResult = [];
let room = '';

function App() {
  const [gameLoaded, loadGame] = useState(0);

  function start() {
    // const roomname = document.querySelector('#roomname').value;
    room = 'RQDS';
    const roomname = room;
    let numPlayers = 2;
    if (roomname == '') return;
    clientSocket.on('connect', () => {
      clientSocket.emit('newgame', roomname, numPlayers, (response) => {
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

  // const initial = (
  //   <div className="startpage">
  //     <input type="text" id="roomname" placeholder="Room Name"></input>
  //     <button onClick={() => start()}>Click here<br />to start!</button>
  //   </div>
  // )

  const initial = (
    <div className="newgame">
      <button type="button" onClick={() => start()}><h3>Start New Game</h3>Generate a code and share with your friends!</button>
      <div className="numplayers">
        <h2>Number of players:</h2><input type="number" min="1" max="4" defaultValue={1}></input>
      </div>
      <h1>OR</h1>
      <button type="button"><h3>Join Existing Game</h3>Join a game with an existing code!</button>
      <input type="text"></input>
    </div>
  )
  
  // props = > start();

  const tooLate = (
    <div className="waiting">
      Room full.
    </div>
  )

  const waiting = (
    <div className="waiting">
      Share this code to play with friends!<br />
      <h1>{room}</h1>
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
      <PlayerTwo socket={clientSocket.players[1]}/>
      <PlayerTwo socket={clientSocket.players[2]}/>
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