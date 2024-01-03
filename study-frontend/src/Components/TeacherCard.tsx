import React, { useEffect, useState } from 'react'
import '../cssFiles/homePage.css'
import TagCard from './TagCard';
import { AiFillStar } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import useUserStore from '../Storages/UserStorage';
import { PostNewFavorite } from '../Services/User/PostNewFavorite';
import { PostRemoveFavorite } from '../Services/User/PostRemoveFavorite';

interface Tag{
  id : number,
  name : string,
  color : string 
}

type Props = {
  username : string
  email : string
  tags : Array<Tag>
  description: string,
  rating: number
};

const TeacherCard = ({username, email, tags, description, rating}: Props) => {

  const [liked, setLiked] = useState(false);
  const {me} = useUserStore();
  const handleLiked = async() => {
    console.log("in liked");
    if(liked === false)
    {
      const data = await PostNewFavorite({email});
    }
    else
    {
      const data = await PostRemoveFavorite({email});
    }
    setLiked(!liked)
  }

  useEffect(()=>{
  const ifLiked = () => {
    me.favorites.map((fav_user) => {
      if(fav_user.email === email)
      {
        setLiked(true);
      }
    })
  } 

  ifLiked();

  }, [])

  return (
    <div className='Card'>
      <div className='cardHeader'>
        {`${username.length >= 14 ? username.substring(0, 12) + "..."  : username}`}
        
        {
          me.email !== email && 
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
        {tags.length <  4 ? 
          tags.map((tag) => (
            <TagCard  key={tag.id} name = {tag.name} color = {tag.color}/>
          )) : 
          tags.slice(0,4).map((tag) => (
            <TagCard  key={tag.id} name = {tag.name} color = {tag.color}/>
          )) 
        }
        {tags.length >  4 && <h1 style = {{fontWeight: 'bold', fontSize: '18', margin:"5px"}}>...</h1>}

      </div>
      <div className='CardDescription'>
        <h1 style = {{fontFamily:'Times New Roman', fontWeight: 'bold', fontSize: '18'}}>Desc:</h1>
        {`${description.length >= 30 ? tags.length > 4 ? description.substring(0, 30)+ "..." :
        description.length <= 90 ?  description : description.substring(0, 90) + "..."   : description}`}
      </div>
      <div className='CardBottom'>
          <div className='CardRating'>
            <AiFillStar style={{color: '#fad02c', fontSize: '25px'}} />
            <div className='CardRatingGrade'>
              {rating}
            </div>
          </div>
          <button className='CardViewButton'>
            View Teacher
          </button>
      </div>
    </div>
  );

}; 

  

export default TeacherCard;
