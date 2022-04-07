import React, { Component } from 'react';

function Square(props) {
  const element = (
    <div className={props.boxStyle}>
      {props.text}
    </div>
  )
  
  return element;
}

export default Square;