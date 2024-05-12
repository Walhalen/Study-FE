import React from 'react'
import useUserStore from '../Storages/UserStorage';

type Props = {
    comment: string,
    receiver: string
}

const Comment = ({comment, receiver}: Props) => {
    const {me} = useUserStore(); 
  
    return (
        <div style = {{width: "100%", display: "flex"
        , justifyContent: receiver === me.email ? "start" : "end"}}>
            <div className= {`${receiver === me.email ? "OtherComment" : "Comment"}`}>
                {comment}
            </div>
        </div>

    )
}

export default Comment
