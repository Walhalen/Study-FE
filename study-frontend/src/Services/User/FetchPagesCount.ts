import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';


type Props = {
    searchValue: string;
    subjectId: string;
}

export const FetchPagesCount = async({searchValue, subjectId} : Props) => {
    try {
       
        if(searchValue === undefined)
            searchValue = "";
        if(subjectId === undefined)
        {
            subjectId = ""; 
        }
        const data = await axiosInstance.get(`http://localhost:8080/user/findPagesCount?searchValue=${searchValue}&subjectId=${subjectId}`)
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