import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import Selector from './Selector';
import ImageTile from './ImageTile';
import './index.css';
import './custom.css';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Selector />
      <ImageTile/ >
      <div id="user-info-storage" data-user-email='okimoto@cv.com'></div>
      <div id="image-cluster-info-storage" data-image-cluster='2'></div>
      <div id="log-storage" data-log='[]'></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
