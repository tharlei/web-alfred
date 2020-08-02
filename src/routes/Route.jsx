import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from '../pages/_Layouts/Dashboard';

const RouteWrapper = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const token = localStorage.getItem('token');

  if (!token && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (token && !isPrivate) {
    return <Redirect to="/" />;
  }

  if (isPrivate) {
    return (
      <Route
        {...rest}
        render={props => (
          <Dashboard>
            <Component {...props} />
          </Dashboard>
        )}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} />
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;