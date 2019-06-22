import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/';
import App from './components/app/App.jsx';
import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("react-root")
);

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
