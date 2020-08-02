import React from 'react';
import { Switch } from 'react-router-dom'
import Route from './Route';

import Login from '../pages/Login'
import Home from '../pages/Home'
import EmployeesIndex from '../pages/Employees/Index'
import EmployeesNew from '../pages/Employees/New'
import EmployeesEdit from '../pages/Employees/Edit'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} isPrivate />
      <Route path='/login' component={Login} />
      <Route path='/employees' exact component={EmployeesIndex} isPrivate />
      <Route path='/employees/new' component={EmployeesNew} isPrivate />
      <Route path='/employees/:id' component={EmployeesEdit} isPrivate />
    </Switch>
  );
}

export default Routes;
