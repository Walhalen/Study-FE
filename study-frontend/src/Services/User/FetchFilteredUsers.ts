import axios from 'axios';
import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';


type Props = {
    searchValue : string
}

const FetchFilteredUsers = async({searchValue} : Props) => {
    try {
        
       
        const path = "http://localhost:8080/user/findFilteredUsers/" + searchValue;
        const data = await axiosInstance.get(path);
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

export default FetchFilteredUsers
    