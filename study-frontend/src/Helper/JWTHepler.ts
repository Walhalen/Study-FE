import React, { FC } from 'react';
import jwtDecode from 'jwt-decode';
import useJWTStore from '../Storages/JWTStorage';
import { useLocation, useNavigate } from 'react-router-dom';
import { pbrouts, routes } from '../constants';
import useUserStore from '../Storages/UserStorage';
import { FetchMe } from '../Services/User/FetchMe';

interface DecodedToken {
  exp: number;
}

const useCheckJWT = () => {
 
  const { setAuthenticated} = useJWTStore();
  const navigate = useNavigate();
  const location = useLocation();
  const {setMe} = useUserStore();
  const checkJWT = async () => {
    if(!pbrouts.some(element => {
      if (location.pathname === element)
        return true;
      else 
        return false;
    })){
      const jwt = sessionStorage.getItem('jwtAccess');
      
      if (jwt === null || jwt === undefined) {
        setAuthenticated(false);
        
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
        
        sessionStorage.removeItem('jwtAccess');
        navigate(routes.login);
        return false;
      }

        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp < currentTime) {
          setAuthenticated(false);
        
          sessionStorage.removeItem('jwtAccess');
          navigate(routes.login);
          return false;
        }

      const data = await FetchMe();
      setMe(data); 
      setAuthenticated(true);
      return true;
    }
  };

  return { checkJWT };
};

export default useCheckJWT;
