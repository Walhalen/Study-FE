import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';

type Props = {
    email : string
}

export const PostNewHistory = async ({email}: Props) => {
    try {        
        const data = await axiosInstance.post(`http://localhost:8080/user/addHistory?historyEmail=${email}`);
        console.log("postingFavorite...")
    } catch (error) {
        throw error;  
    }
}