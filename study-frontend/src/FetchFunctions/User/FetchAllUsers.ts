import React from 'react'

const FetchAllUsers = async() => {
    try {
        const data = await fetch("http://localhost:8080/user/findAll")
        const jsonData = await data.json();
        return jsonData;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;  // Rethrow the error to be caught by the caller
    }
}

export default FetchAllUsers
