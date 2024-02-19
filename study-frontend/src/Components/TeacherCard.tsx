import React, { useEffect, useState } from 'react'
import '../cssFiles/homePage.css'
import TagCard from './TagCard';
import { AiFillStar } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import useUserStore from '../Storages/UserStorage';
import { PostNewFavorite } from '../Services/User/PostNewFavorite';
import { PostRemoveFavorite } from '../Services/User/PostRemoveFavorite';
import { routes } from '../constants';
import { useNavigate } from 'react-router-dom';
import { FavoriteOrHistoryUserDto, User, UserDto } from '../Types/UserIntrfaces';
import { PostNewHistory } from '../Services/User/PostNewHistory';

interface Tag{
  id : number,
  name : string,
  color : string 
}

type Props = {
  user: FavoriteOrHistoryUserDto
};

const TeacherCard = ({user}: Props) => {

  const [liked, setLiked] = useState(false);
  const {me} = useUserStore();

  const navigator = useNavigate();

  const handleLiked = async() => {
    console.log("in liked");
    if(liked === false)
    {
      const email = user.email 
      const data = await PostNewFavorite({email});
    }
    else
    {
      const email = user.email
      const data = await PostRemoveFavorite({email});
    }
    setLiked(!liked)
  }

  useEffect(()=>{
  const ifLiked = () => {
    me.favorites.map((fav_user) => {
      if(fav_user.username === user.username)
      {
        setLiked(true);
      }
    })
  } 

  ifLiked();

  }, [])

  const handleViewTeacher = async() => {
    const email  = user.email; 
    const data = await PostNewHistory({email});
    navigator(routes.teacherOverviewPage, {state :{user : {user}}} );
  }

  return (
    <div className='Card'>
      <div className='cardHeader'>
        {`${user.username.length >= 14 ? user.username.substring(0, 12) + "..."  : user.username}`}
        
        {
          me.email !== user.email && 
            <div className='cardFavoriteIconBox'>
              {
              
                liked ?
                  <button onClick = {handleLiked}>
                    <IoMdHeart style = {{color:"rgb(242, 146, 162)"}}/>
                  </button>
                  : 
                  <button onClick = {handleLiked}>
                    <IoMdHeartEmpty style = {{color:"rgb(242, 146, 162)"}} / >
                  </button>
                
              }

            </div>
        }

      </div>
      
      <div className='CardTagsField'>
        {user.tags.length <  4 ? 
          user.tags.map((tag) => (
            <TagCard  key={tag.id} name = {tag.name} color = {tag.color}/>
          )) : 
          user.tags.slice(0,4).map((tag) => (
            <TagCard  key={tag.id} name = {tag.name} color = {tag.color}/>
          )) 
        }
        {user.tags.length >  4 && <h1 style = {{fontWeight: 'bold', fontSize: '18', margin:"5px"}}>...</h1>}

      </div>
      <div className='CardDescription'>
        <h1 style = {{fontFamily:'Times New Roman', fontWeight: 'bold', fontSize: '18'}}>Desc:</h1>
        {`${user.description.length >= 30 ? user.description.length > 4 ? user.description.substring(0, 30)+ "..." :
        user.description.length <= 90 ?  user.description : user.description.substring(0, 90) + "..."   : user.description}`}
      </div>
      <div className='CardBottom'>
          <div className='CardRating'>
            <AiFillStar style={{color: '#fad02c', fontSize: '25px'}} />
            <div className='CardRatingGrade'>
              {user.rating}
            </div>
          </div>
          <button className='CardViewButton' onClick = {handleViewTeacher}>
            View Teacher
          </button>
      </div>
    </div>
  );

}; 

  

export default TeacherCard;
