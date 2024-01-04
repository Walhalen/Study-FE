import React from 'react'
import { User } from '../Types/UserIntrfaces'
import '../cssFiles/favoritesPage.css'
import { CgProfile } from "react-icons/cg"
import TagCard from './TagCard'
import { AiFillStar } from "react-icons/ai";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

type Props = {
    user: User
}

export const FavoriteTeacherCard = ({user}: Props) => {
  return (
    <div className='FavoriteTeacherCard'>
        <div className='IconField'>
            <CgProfile style={{fontSize: "50px"}}/> 
        </div>
        
        <div className='InfoField'>
            <h1>
                {user.username}
            </h1>
            <div style={{display:"flex"}}>
                {
                    user.tags.map((tag)=>(
                        <TagCard key={tag.id} name={tag.name} color={tag.color}/>
                    ))
                }
            </div>
        </div>
        <div className='RatingField'>
            <AiFillStar style={{color: '#fad02c', fontSize: '25px'}} />
            <div className='CardRatingGrade'>
                {user.rating}
            </div>
        </div>
        <div className='NavigationField'>
            <PiPaperPlaneTiltLight style={{fontSize:"30px"}}/>
            <CiViewList style={{fontSize:"30px"}}/>
            <IoMdHeart style = {{color:"rgb(242, 146, 162)", fontSize:"30px"}}/>
        </div>
    </div>
  )
}

export default FavoriteTeacherCard; 