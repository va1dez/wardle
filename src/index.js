import * as ReactDOM from 'react-dom/client';
import React from 'react';
import styles from "../assets/css/styles.css"
import App from './App';
import Keyboard from './Keyboard';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <App name="Wardle" />
);
