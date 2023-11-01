import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { routes } from './constants';

type Props = {
  isAuthenticated: boolean;
};

function PrivateRoute ({isAuthenticated }: Props){
  console.log("Person is: " + isAuthenticated)
  return isAuthenticated ? (
    <Outlet/>
  ) : (
    <Navigate to={routes.login} />
  );
};


export default PrivateRoute;