import React, { useEffect } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { routes } from './constants';

type Props = {
  isAuthenticated: boolean;
};

function PrivateRoute ({isAuthenticated }: Props){
  console.log("Person is: " + isAuthenticated)
  useEffect(() => {

  }, [isAuthenticated])
  return isAuthenticated ? (
    <>
    
      {
        <Outlet/>
      }
    </>
    
  ) : (
    // <Loading></Loading>
    <span className="loading loading-dots loading-lg"></span>
  );
};


export default PrivateRoute;