import React from 'react'
import '../cssFiles/searchPage.css'
import TagCard from './TagCard';
import { AiFillStar } from "react-icons/ai";



interface Tag{
  id : number,
  name : string,
  color : string 
}

type Props = {
  username : string
  email : string
  tags : Array<Tag>
};

const TeacherCard = ({username, email, tags}: Props) => {
  console.log(username)
  return (
    <div className='Card'>
      <div className='cardHeader'>
        {`${username.length >= 14 ? username.substring(0, 12) + "..."  : username}`}
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
        Hello I am Ivan and want to be your math teacher
      </div>
      <div className='CardBottom'>
          <div className='CardRating'>
            <AiFillStar style={{color: '#fad02c', fontSize: '25px'}} />
            <div className='CardRatingGrade'>
              3.75
            </div>
          </div>
          <button className='CardViewButton'>
             View Teacher
          </button>
      </div>
    </div>
  )
}

export default TeacherCard
