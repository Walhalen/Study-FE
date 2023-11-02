
import { responseEncoding } from 'axios';
import React from 'react'
import { json } from 'stream/consumers';
import { axiosInstance } from '../../Helper/FetchHelper';

type Props = {
    username: string,
    email : string, 
    password : string

};

const Registration = async ({username, email, password} : Props )  => {
    
    console.log("username, password, email")
    try{
        const response = await axiosInstance.post('http://localhost:8080/auth/register', {
            username: username,
            email : email,
            password : password
        })
        const data = await response.data
        return data
    }catch(error)
    {
        alert("this email is already in use. Try again with other email")
        throw error;
    }
}

export default Registration
