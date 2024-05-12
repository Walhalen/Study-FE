import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';

type Props = {
    otherEmail:string
}

const FindAllCommtnsBySenderAndReceiver = async({otherEmail}:Props) => {
    try {

        
        const data = await axiosInstance.get(`http://localhost:8080/comments/getCommentsBySenderAndReceiver?OtherUserEmail=${otherEmail}`)
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

export default FindAllCommtnsBySenderAndReceiver
