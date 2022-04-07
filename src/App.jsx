import React, { Component, useState, useEffect } from 'react';
import PlayerTwo from './PlayerTwo';
import PlayerOne from './PlayerOne';
import PlayerThree from './PlayerThree';
import PlayerFour from './PlayerFour';
import clientSocket from './clientSocket';

function App() {
  const [gameLoaded, loadGame] = useState(0);
  let winner;
  let ownID;

  function start() {
    const roomname = document.querySelector('#roomname').value;
    clientSocket.on('connect', () => {
      clientSocket.emit('newgame', roomname);
    })
    clientSocket.on('fullgame', (response) => {
      clientSocket.players = response.filter((ele) => ele !== clientSocket.id);
      console.log(clientSocket.players);
      console.log(clientSocket.id);
      loadGame(2);
    })
    clientSocket.roomname = roomname;
    clientSocket.open();
    loadGame(1);
  }

  const initial = (
    <div>
      <input type="text" id="roomname"></input><br />
      <button onClick={() => start()}>Click me!</button>
    </div>
  )
  
  const waiting = (
    <div className="waiting">
      Waiting for others...
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
  
  const gameOver = (
    <div className="gameoverscreen">

    </div>
  )


  let final = initial;

  if (gameLoaded == 1) {
    final = waiting;
  }
  if (gameLoaded == 2) {
    final = gameStart;
  }

  return final;
}

export default App;