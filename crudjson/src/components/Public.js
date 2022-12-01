import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const PublicRoute = ({ children, isAuthenticated, ...rest }) => {
  return <Route {...rest} />;
};
export default PublicRoute;
