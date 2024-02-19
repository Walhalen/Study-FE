import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';

type Props = {
    email : string
}

export const DeleteRemoveHistory = async ({email}: Props) => {
    try {        
        const data = await axiosInstance.post(`http://localhost:8080/user/removeHistory?historyEmail=${email}`);
        console.log("removing History...")
        return data; 
    } catch (error) {
        console.log("Alo da2 ")
        throw error;  
    }
}
