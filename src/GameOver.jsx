import React, { Component } from 'react';

function GameOver(props) {
  const element = (
    <div className="gameoverscreen">
      You {props.winner}! The word was {props.word}.
    </div>
  )
  
  return element;
}

export default GameOver;