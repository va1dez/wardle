import React, { Component } from 'react';

function Key(props) {
  const element = (
    <div id={props.keyID} className={'key' + props.keyState}>
      {props.letter}
    </div>
  )
  
  return element;
}

export default Key;