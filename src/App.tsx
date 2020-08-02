import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import history from './routes/history';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Router>
    </Provider>
  );
}

export default App;