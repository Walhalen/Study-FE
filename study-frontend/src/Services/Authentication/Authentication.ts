import axios from 'axios';
import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';
import useUserStore from '../../Storages/UserStorage';



type Props = {
    email : string,
    password: string

};

export const Authentication = async ({email, password} : Props) => {
    

    try {
        const response = await axiosInstance.post('http://localhost:8080/auth/authentication',{
            email: email,
            password: password
        })
        const data = await response.data;
        console.log(data)

        return data;
    }catch(error)
    {
        throw error;
    }
}
