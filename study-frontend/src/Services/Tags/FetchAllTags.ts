import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';

export const FetchAllTags = async() => {
    try {

        const jwtToken : string = sessionStorage.getItem("jwt") as string;
        
        const data = await axiosInstance.get("http://localhost:8080/subject/findAll")
        console.log("fething...")
        if(data.status === 200)
        {       
            const jsonData = await data.data;
            return jsonData;
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        // throw error;  
    }
}
