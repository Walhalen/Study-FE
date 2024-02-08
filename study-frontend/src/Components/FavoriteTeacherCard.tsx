import React, { useEffect, useState } from 'react'
import { FavoriteUserDto, User, UserDto } from '../Types/UserIntrfaces'
import '../cssFiles/favoritesPage.css'
import { CgProfile } from "react-icons/cg"
import TagCard from './TagCard'
import { AiFillStar } from "react-icons/ai";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { PostNewFavorite } from '../Services/User/PostNewFavorite'
import { PostRemoveFavorite } from '../Services/User/PostRemoveFavorite'
import { useNavigate } from 'react-router-dom'
import { routes } from '../constants'

type Props = {
    user: FavoriteUserDto
}

export const FavoriteTeacherCard = ({user}: Props) => {

    const [liked, setLiked] = useState(true)
    const navigator = useNavigate(); 

    const handleLiked = async() => {
        console.log("in liked");
        if(liked === false)
        {
            const email = user.email; 
            const data = await PostNewFavorite({email});
        }
        else
        {
            const email = user.email;
            const data = await PostRemoveFavorite({email});
        }
        setLiked(!liked)
    }
    const handleViewPerson = () => {
        navigator(routes.teacherOverviewPage, {state :{user : {user}}})
    }
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
                <button>
                    <CiViewList style={{fontSize:"30px"}} onClick={handleViewPerson}/>
                </button>
                
                {
                    liked ?
                        <button onClick = {handleLiked}>
                            <IoMdHeart style = {{color:"rgb(242, 146, 162)", fontSize:"30px"}}/>
                        </button>
                        : 
                        <button onClick = {handleLiked}>
                            <IoMdHeartEmpty style = {{color:"rgb(242, 146, 162)", fontSize:"30px"}} / >
                        </button>
                }   
                
            </div>
        </div>
    )
}

export default FavoriteTeacherCard; 