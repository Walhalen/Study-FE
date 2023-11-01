import React from 'react';
import jwtDecode from 'jwt-decode';
import useJWTStore from '../JWTStorage';

interface DecodedToken {
  exp: number;
}

const useCheckJWT = () => {
  const { setAuthenticated, setJWT } = useJWTStore();
  console.log("In Helper")
  const checkJWT = () => {
    const jwt = sessionStorage.getItem('jwt');
    console.log(jwt);
    if (jwt === null || jwt === undefined) {
      setAuthenticated(false);
      setJWT('');
      sessionStorage.removeItem('jwtAccess');
      console.log("In if one")
      return false;
    }

    let decodedToken: DecodedToken;

    try {
      decodedToken = jwtDecode<DecodedToken>(jwt!);
    } catch (error) {
      console.error('Error decoding token:', error);
      setAuthenticated(false);
      setJWT('');
      sessionStorage.removeItem('jwtAccess');
      console.log("In if two")
      return false;
    }

    const currentTime = Math.floor(Date.now() / 1000);

    if (decodedToken.exp < currentTime) {
      setAuthenticated(false);
      setJWT('');
      sessionStorage.removeItem('jwtAccess');
      console.log("In if three")
      return false;
    }


    setAuthenticated(true);

    return true;
  };

  return { checkJWT };
};

export default useCheckJWT;
