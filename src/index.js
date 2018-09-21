/* React & ReactDOM & React Router */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/* Components */
import registerServiceWorker from './registerServiceWorker';
import App from './App';

/* Stylesheets */
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
