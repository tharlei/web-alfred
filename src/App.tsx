import React from 'react';
import Routes from './routes';
import history from './routes/history';
import store from './store';
import { Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
          <ToastContainer autoClose={3000} />
        </Provider>
      </BrowserRouter>
    </Router>
  );
}

export default App;