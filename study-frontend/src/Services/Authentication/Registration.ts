
import { responseEncoding } from 'axios';
import React from 'react'
import { json } from 'stream/consumers';
import { axiosInstance } from '../../Helper/FetchHelper';


interface Tag{
    id : number,
    name : string,
    color : string 
  }

type Props = {
    formData: { username: string; email: string; password: string; description: string}
    myTags : Array<Tag>
};

const Registration = async ({formData, myTags} : Props )  => {
    
    
    try{
        const response = await axiosInstance.post('http://localhost:8080/auth/register', {
            username: formData.username,
            email : formData.email,
            password : formData.password,
            tags: myTags,
            description: formData.description,
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
