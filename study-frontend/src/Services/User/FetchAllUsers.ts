import axios from 'axios';
import React from 'react'

const FetchAllUsers = async() => {
    try {

        const jwtToken : string = sessionStorage.getItem("jwt") as string;
        
        const data = await axios.get("http://localhost:8080/user/findAll")
        if(data.status === 200)
        {
            const jsonData = await data.data();
            return jsonData;
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;  
    }
}

export default FetchAllUsers
        