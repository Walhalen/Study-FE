import React from 'react'

const FetchAllUsers = async() => {
    try {
        fetch("http://localhost:8080/user/findAll").then((response)=>{
            return response.json();
        })
        // const jsonData = await data.json();
        // console.log(jsonData);
        // return jsonData;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;  // Rethrow the error to be caught by the caller
    }
}

export default FetchAllUsers
