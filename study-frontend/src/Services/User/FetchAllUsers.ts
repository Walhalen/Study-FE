import React from 'react'

const FetchAllUsers = async() => {
    try {

        const jwtToken : string = sessionStorage.getItem("jwt") as string;
        
        const data = await fetch("http://localhost:8080/user/findAll", {
            method : 'GET',
            headers: {  
                Authorization : `Bearer ${jwtToken}`
            }
        })
        if(data.ok)
        {
            const jsonData = await data.json();
            return jsonData;
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;  
    }
}

export default FetchAllUsers
        