import React, { useEffect, useState } from 'react'
import { GoPaperAirplane } from "react-icons/go";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { CommentsDTO } from '../Types/Comments';
import FindAllCommtnsBySenderAndReceiver from '../Services/Comments/FindAllCommtnsBySenderAndReceiver';
import PostNewComment from '../Services/Comments/PostNewComment';
import Comment from './Comment';

type Props = {
    RefChat: any,
    otherEmail: string
} 

const ChatBox = ({RefChat, otherEmail} : Props) => {
    const [animation1, setAnimation1] = useState(false);
    const [animation2, setAnimation2] = useState(false);
    const [animation3, setAnimation3] = useState(false);
    const [comment, setComment] = useState("");
    const [allComments, setAllComments] = useState<CommentsDTO[]>([])
    const [error, setError] = useState("");
    const handleSentMessage = async () => {
        try { 
            const data = await PostNewComment({otherEmail, comment})
        
            setAllComments([{
                comment: comment,
                receiverEmail: otherEmail   
            },...allComments])
            setComment("")
            setAnimation1(false);
            setAnimation2(false);
        } catch (error) {
            console.error("Error posting comment:", error);
            setError("Failed to post comment");
          }
    }
    useEffect(() => {

        const fetchData = async () => {
          try { 
            
            const data = await FindAllCommtnsBySenderAndReceiver({otherEmail});
            console.log(data)
            setAllComments(data.reverse());
          } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch data");
          }
    
        };
    
        fetchData();
      }, [error]);

    
    return (
    <section>
        {/* <hr style={{border:"0.5px solid rgb(197, 218, 242)", marginBottom: "35px"}}/> */}
        <div className='ChatHeader' ref= {RefChat}>
            <h1>Chat Now</h1>
        </div>
        <div className='ChatField'>
            <section className='CommentsBox'>
                {
                    allComments.map((c, index)=>
                    (
                        <Comment key={index} comment={c.comment} receiver={c.receiverEmail}/>
                    ))
                }
            </section>
            <section className="MessageBox">
                <textarea
                    className="TextAreaComment"
                    placeholder="Enter New Comment"
                    value = {comment}
                    style={{height: animation2 ? "80px" : "50px"}}
                    onChange={(e) => {
                        
                        setAnimation1(true);
                        setComment(e.target.value);
                        if(e.target.value.length > 0)
                         {      
                            setAnimation3(true);
                            setAnimation1(true);   
                        } 
                        else
                        {    
                            setAnimation3(false);
                            setAnimation1(false);
                        }
                        if(e.target.value.length >= 50)
                            setAnimation2(true);
                        else
                            setAnimation2(false);
                    }}
                    // onBlur={() => {
                    //     setAnimation1(false);
                    // }}
                />
                <div className='SentMessage' style = {{width: animation1 ? "90px": "60px"}} >
                    {
                        animation1 ? 
                        <button onClick={handleSentMessage}>
                            <HiOutlinePaperAirplane style={{fontSize: "30px", color: "black"}}/>
                        </button>
                        : <GoPaperAirplane style={{fontSize: "30px", color: "black"}}/>
                       
                        
                    }
                    
                </div>
                
            </section>
        </div>
        {/* <textarea
                className="MessageBox"
                
                
            //   required
            //   value={}
            //   onChange={(e) => setFormData({email: formData.email, password: e.target.value})}
        /> */}
    </section>
    )
}

export default ChatBox
