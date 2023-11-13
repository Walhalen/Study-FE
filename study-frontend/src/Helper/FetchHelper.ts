import axios, { HttpStatusCode } from 'axios'
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import useJWTStore from '../JWTStorage';
import React, { FC, PropsWithChildren, useEffect } from 'react'

export const axiosInstance = axios.create();





axiosInstance.interceptors.request.use(
    config => {
        
        const token = sessionStorage.getItem("jwtAccess")
        
        if(token !== null && token !== undefined)
        {
            
            config.headers['Authorization'] = 'Bearer ' + token
        }
        
        

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
         
axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    function(error) {
        
        const originalRequest = error.config;

        if(
            error.response.status === HttpStatusCode.Unauthorized
        )
        {
            window.location.reload();
        }


    }


);



  





