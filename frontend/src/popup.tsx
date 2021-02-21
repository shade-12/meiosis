import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './pages/Popup';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
