/* React & ReactDOM & React Router */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Redux from "redux";

/* Components */
import App from './components/app/App.jsx';

/* Stylesheets */
import './styles/index.css';

/* Service Worker */
import registerServiceWorker from './registerServiceWorker';


let initialStore = {
  data: {},
  ui: {}
}
//let store = Redux.createStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("react-root")
);

registerServiceWorker();
