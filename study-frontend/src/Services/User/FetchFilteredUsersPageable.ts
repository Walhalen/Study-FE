import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';

type Props = {
    searchValue : string; 
    page : number
} 

export const FetchFilteredUsersPageable =  async({searchValue, page} : Props) => {
    console.log("Search value " + page)
    try {
        const data = await axiosInstance.get(`http://localhost:8080/user/findFilteredUsersPageable?searchInfo=${searchValue}&page=${page}`);
        console.log("fething...")
        if(data.status === 200)
        {       
            const jsonData = await data.data;
            return jsonData;
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;  
    }
}
