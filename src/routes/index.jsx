import React from 'react';
import { Switch } from 'react-router-dom'
import Route from './Route';

import Login from '../pages/Login'
import Home from '../pages/Home'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} isPrivate />
      <Route path='/login' component={Login} />
      {/* <Route path='/cars' exact component={CarsIndex} isPrivate />
      <Route path='/cars/new' component={CarsNew} isPrivate />
      <Route path='/cars/:id' component={CarsEdit} isPrivate /> */}
    </Switch>
  );
}

export default Routes;
