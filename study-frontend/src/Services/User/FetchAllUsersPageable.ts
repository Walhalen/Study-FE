import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';

type Props = {
    page : number
}


export const FetchAllUsersPageable = async ({page} : Props) => {
  
    try {

        
        const data = await axiosInstance.get(`http://localhost:8080/user/findAllPageable?page=${page}`)
        console.log("fething...")
        if(data.status === 200)
        {       
            const jsonData = await data.data;
            return jsonData;
        }
        else
        {
            console.log("aloooooo" + data)
        }

    } catch (error) {
        // console.error("Error fetching data:", error);
        console.log("Alo da2 ")
        throw error;  
    }
}
