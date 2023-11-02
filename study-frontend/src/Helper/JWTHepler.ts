import React from 'react';
import jwtDecode from 'jwt-decode';
import useJWTStore from '../JWTStorage';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';

interface DecodedToken {
  exp: number;
}

const useCheckJWT = () => {
 
  const { setAuthenticated} = useJWTStore();
  const navigate = useNavigate()
 
  const checkJWT = () => {
    const jwt = sessionStorage.getItem('jwtAccess');
    console.log(jwt)
    if (jwt === null || jwt === undefined) {
      setAuthenticated(false);
      console.log("hello")
      sessionStorage.removeItem('jwtAccess');
      navigate(routes.login);
      return false;
    }

    let decodedToken: DecodedToken;

    try {
      decodedToken = jwtDecode<DecodedToken>(jwt!);
    } catch (error) {
      console.error('Error decoding token:', error);
      setAuthenticated(false);
      console.log("hello2")
      sessionStorage.removeItem('jwtAccess');
      navigate(routes.login);
      return false;
    }

    const currentTime = Math.floor(Date.now() / 1000);

    if (decodedToken.exp < currentTime) {
      setAuthenticated(false);
      console.log("hello3")
      sessionStorage.removeItem('jwtAccess');
      navigate(routes.login);
      return false;
    }


    setAuthenticated(true);
    return true;
  };

  return { checkJWT };
};

export default useCheckJWT;
