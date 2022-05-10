import React, { Component } from 'react';
import Key from './Key';

function Keyboard(props) {
  const row1 = [];
  const row2 = [];
  const row3 = [];
  const keyboard = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['ENTER','Z','X','C','V','B','N','M','\u232B']
  ];
  

  for (let i = 0; i < 10; i++) {
    row1.push(<Key id={`r1k${i}`} key={`r1k${i}`} letter={keyboard[0][i]} keyState={props.letterState[keyboard[0][i]]} />);
  }

  for (let i = 0; i < 9; i++) {
    row2.push(<Key id={`r1k${i}`} key={`r1k${i}`} letter={keyboard[1][i]} keyState={props.letterState[keyboard[1][i]]} />);
  }

  for (let i = 0; i < 9; i++) {
    let keyState = props.letterState[keyboard[2][i]];
    if (keyState === undefined) keyState = '';
    row3.push(<Key id={`r1k${i}`} key={`r1k${i}`} letter={keyboard[2][i]} keyState={keyState} />);
  }

  const element = (
    <div className="keyboard">
      <div className="row top">
        {row1}
      </div>
      <div className="row middle">
        {row2}
      </div>
      <div className="row bottom">
        {row3}
      </div>
    </div>
  )
  
  return element;
}

export default Keyboard;