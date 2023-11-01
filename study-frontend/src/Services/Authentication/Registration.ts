
import { responseEncoding } from 'axios';
import React from 'react'
import { json } from 'stream/consumers';

type Props = {
    username: string,
    email : string, 
    password : string

};

const Registration = async ({username, email, password} : Props )  => {
    
    console.log("username, password, email")
    try{
        
            
        
        const metadata  = {
            username: username,
            email : email,
            password : password
        };
        if(username === null || username=== undefined || username === ""){
            console.log("tashk")
        }   
        console.log(username)
        const response = await fetch('http://localhost:8080/auth/register', {
            method : 'POST',
            headers:{
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(metadata)
        })
        const data = await response.json()
        return data
    }catch(error)
    {
        alert("this email is already in use. Try again with other email")
        throw error;
    }
}

export default Registration
