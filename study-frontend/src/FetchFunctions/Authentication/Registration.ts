
import { responseEncoding } from 'axios';
import React from 'react'
import { json } from 'stream/consumers';

type Props = {
    firstName : string,
    lastName : string,
    email : string, 
    password : string

};

const Registration = async ({firstName, lastName, email, password} : Props )  => {
    try{
        const response = await fetch('http://localhost:8080/api/v1/auth/register', {
            method : 'POST',
            headers:{
                "first_name" : firstName,
                "last_name" : lastName,
                "email" : email,
                "password" : password
            }
        })
        const data = await response.json()
        return data
    }catch(error)
    {
        throw error;
    }
}

export default Registration
