import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }
  return <Route {...rest} render={(tempProps) => children} />;
};

export default PrivateRoute;
