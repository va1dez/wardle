import React, { Component, useState, useEffect } from 'react';
import Square from '../components/square';
let count = 0;

function Row(props) {
  const element = (
    <div className="row">
      <Square text={props.letters[0]} />
      <Square text={props.letters[1]} />
      <Square text={props.letters[2]} />
      <Square text={props.letters[3]} />
      <Square text={props.letters[4]} />
    </div>
  )

  return element;
}

export default Row;