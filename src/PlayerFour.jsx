import React, { Component, useState, useEffect } from 'react';
import Square from './square';
import clientSocket from './clientSocket';

const initBoard = {
  currRow: 0,
  0 : [],
  1 : [],
  2 : [],
  3 : [],
  4 : [],
  5 : [],
  style: []
};

function PlayerFour(props) {
  const [ board, setLetters ] = useState(initBoard);
  const squareArray = new Array(30);
  const playerID = props.socket;

  clientSocket.on('redraw', (style, id) => {
    if (id === playerID) {
      const update = {...board, style};
      setLetters(update);
    }
  })

  for (let i = 0; i < squareArray.length; i++) {
    let sqKey = 'p4sq';
    sqKey += i;
    const row = Math.floor(i/5);
    const sq = i%5;
    const value = (board[row][sq]) ? (board[row][sq]) : '';
    const style = (board.style[i]) ? (board.style[i]) : 'box';

    squareArray[i] = <Square key={sqKey} text={value} boxStyle={style} />
  }
  
  const element = (
    <div className="container">
      {squareArray}
    </div>
  )

  return element;
}

export default PlayerFour;