import React from 'react'

type Props = {
    email : string,
    password: string

};

export const Authentication = async ({email, password} : Props) => {


    try {
      
        const metadata = {
            email : email,
            password : password

        }; 
        const response = await fetch('http://localhost:8080/auth/authentication',{
                method : 'POST',
                headers : {
                    'Content-Type' : "application/json"
                },
                body : JSON.stringify(metadata)
            }
        ); 
        const data = await response.json();
        console.log(data)
        return data;
    }catch(error)
    {
        throw error;
    }
}
