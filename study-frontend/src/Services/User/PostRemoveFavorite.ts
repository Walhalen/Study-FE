import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';

type Props = {
    email : string
}

export const PostRemoveFavorite = async ({email}: Props) => {
    try {        
        const data = await axiosInstance.post(`http://localhost:8080/user/removeFavorite?favoriteEmail=${email}`);
        console.log("postingFavorite...")
        return data; 
    } catch (error) {
        console.log("Alo da2 ")
        throw error;  
    }
}
