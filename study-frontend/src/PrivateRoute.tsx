import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { routes } from './constants';

type Props = {
//   path: string;
//   element: any;
  isAuthenticated: boolean;
};

function PrivateRoute ({isAuthenticated }: Props){
  return isAuthenticated ? (
    <Outlet/>
  ) : (
    <Navigate to={routes.login} />
  );
};


export default PrivateRoute;