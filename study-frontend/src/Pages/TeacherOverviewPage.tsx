import React, { useContext, useState } from 'react'
import '../cssFiles/teacherOverview.css'
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import TeacherOverview from '../Components/TeacherOverview';
import { relative } from 'path';
import { ThemeContext } from '../Context/ThemeContext';
import { GoHome } from "react-icons/go";
import { routes } from '../constants';
import learning from '../assets/elearning-portals-cover-picture.svg'
import { UserDto } from '../Types/UserIntrfaces';

const TeacherOverviewPage = () => {
  const props = useLocation();
  let params = props.state 
  const {viewportWidth} = useContext(ThemeContext);
  const [user, setUser] = useState<UserDto>(params.user.user)
  const navigator = useNavigate()
  
  const handleHomeIcon = () => {
      navigator(routes.home)
  }

  return (
    <div style={{position: "relative", minHeight: "fit-content"}}> 
      <div className='BackgroundTeacherOverview'>
          <header className='profileHeader'>
              <button>
                  <GoHome style= {{fontSize: `${viewportWidth < 1200 ? "30px" : "30px " }` }}onClick={handleHomeIcon}/>
              </button>
                
              <h1 className='profilePageHeaderText'>Your Profile</h1>  
          </header>
          <img src={learning} alt="ALoooo" className='IMGBackgound'/>
      </div>
      <div className='TeacherOverviewFieldAbsolute'>
          <TeacherOverview user = {user}/>
      </div>
    </div>  
  )
}

export default TeacherOverviewPage
