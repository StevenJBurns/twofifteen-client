import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/';
import './index.scss';

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
