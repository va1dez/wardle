import React, { Component, useState, useEffect } from 'react';
import Square from './square';
import clientSocket from './clientSocket';
import keyLogic from './keyboardLogic.js';

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

function PlayerOne() {
  const [ board, setLetters ] = useState(initBoard);
  
  function newLetter(letter) {
    let row = board.currRow;
    const output = keyLogic.translate(letter);
    const newRow = JSON.parse(JSON.stringify(board[row]));
    const changes = {}

    // const demoOutput = ['G','G','X','C','G'];
    // const demoOutput = 'notaword';
    

    if (!output) {
      return;
    }

    if (newRow.length === 5) {
      if (output === 'back') {
        newRow.pop();
      } else if (output === 'enter') {
        clientSocket.emit('checkword', clientSocket.roomname, newRow, (reply) => {
          const demoOutput = reply;

          if (demoOutput === 'notaword') {
            return;
          }
  
          const newStyle = demoOutput.map((ele, index) => {
            if (ele == 'G') {
              return 'box green';
            } if (ele == 'C') {
              return 'box yellow';
            } if (ele == 'X') {
              return 'box dark';
            }
          });

          changes.style = board.style.concat(newStyle);
          changes.currRow = row + 1;
          const newBoard = {...board, ...changes};
          setLetters(newBoard);
          clientSocket.emit('update', clientSocket.roomname, changes.style);
          if (demoOutput.every((ele) => ele === 'G')) {
            console.log('You won!');
          }
          return;
        })
      } else {
        return;
      }
    } else if (newRow.length === 0 && output === 'back') {
      return;
    } else if (output === 'enter') {
      return;
    } else if (output === 'back') {
      newRow.pop();
    } else if (output !== 'enter') {
      newRow.push(output);
    }

    // if (output === 'back') {
    //   newRow.pop();
    // } else if (output !== 'enter' && newRow.length === 5) {
    //   newRow.push(output);
    // } else if () {

    // }
    // else if (newRow.length === 5 && output === 'enter') {
    //   changes.currRow = row + 1;
    // }
    changes[row] = newRow;
    const newBoard = {...board, ...changes};
    setLetters(newBoard);
  }

  useEffect(() => {
    
    document.addEventListener('keydown', newLetter);
    console.log(clientSocket.connected);

    return () => {
      document.removeEventListener('keydown', newLetter);
    }
  })
  
  const squareArray = new Array(30);

  for (let i = 0; i < squareArray.length; i++) {
    let sqKey = 'p1sq';
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

export default PlayerOne;