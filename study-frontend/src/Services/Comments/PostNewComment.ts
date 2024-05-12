import React from 'react'
import { axiosInstance } from '../../Helper/FetchHelper';

type Props = {
    otherEmail: string, 
    comment: string
}
const PostNewComment = async({otherEmail, comment}: Props) => {
    try {        
        const data = await axiosInstance.post(`http://localhost:8080/comments/addComment`, {
            receiverEmail: otherEmail,
            comment: comment
        });
        console.log("postingComment...")
    } catch (error) {
        console.log("Alo da2 ")
        throw error;  
    }
}

export default PostNewComment
