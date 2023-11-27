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
        return response;
    },
    error => {
        console.log("ALoooooo");
        const originalRequest = error.config;
        console.log(error.response);
        console.log("Helloooo");

        if (error.response && error.response.status === HttpStatusCode.Unauthorized) {
            window.location.reload();
        }

        if (error.response && error.response.status === HttpStatusCode.Forbidden) {
            window.location.reload();
        }

        // Handle other error cases if needed

        // Returning a Promise.reject to propagate the error
        return Promise.reject(error);
    }
);
    



  





