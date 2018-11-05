/* React & ReactDOM & React Router */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/* Components */
import registerServiceWorker from './registerServiceWorker';
import App from './components/app/App.jsx';

/* Stylesheets */
import './styles/index.css';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("react-root")
);

registerServiceWorker();
