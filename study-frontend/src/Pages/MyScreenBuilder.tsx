import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { page, routes } from '../constants';
import jwtDecode from 'jwt-decode';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface DecodedToken {
  exp: number;
  // Add other token fields here if needed
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const MyScreenBuilder = () => {
  const navigate = useNavigate  ();
    

    useEffect(() => {
        const navigator  = () => {
            const jwt = sessionStorage.getItem('jwt');
            console.log("Hello")
            if (jwt === null || jwt === undefined) {
                navigate(routes.login);
            }
            else
            {
                let decodedToken: DecodedToken;

                try {
                    decodedToken = jwtDecode<DecodedToken>(jwt!);
                } catch (error) {
                    console.error('Error decoding token:', error);
                    navigate(routes.login);
                    return null;
                }

                const currentTime = Math.floor(Date.now() / 1000);

                if (decodedToken.exp < currentTime) {
                    navigate(routes.login);
                }
            }


        }
        navigator();
    }, [page])


  
    return(
        <Spin indicator={antIcon} />
    );

};
