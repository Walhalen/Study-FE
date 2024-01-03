import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';

type Props = {
    email : string
}

export const PostNewFavorite = async ({email}: Props) => {
    try {        
        const data = await axiosInstance.post(`http://localhost:8080/user/addFavorite?favoriteEmail=${email}`);
        console.log("postingFavorite...")
    } catch (error) {
        console.log("Alo da2 ")
        throw error;  
    }
}


