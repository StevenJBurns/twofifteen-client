import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/app/App/App.jsx';
import { store } from './state/store';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    {/* PersistGate here... */}
    {/* ThemeProvider here... */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* ThemeProvider here... */}
    {/* PersistGate here... */}
  </Provider>,
  document.getElementById("react-root")
);
