import React from 'react'
import '../cssFiles/searchPage.css'
type Props = {
    username : string
};

const TeacherCard = ({username}: Props) => {
  
  return (
    <div className='Card'>
      <div className='cardHeader'>
        {username}
      </div>
      
    </div>
  )
}

export default TeacherCard
