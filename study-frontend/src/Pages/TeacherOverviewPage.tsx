import React, { useContext, useEffect, useState } from 'react'
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
import useUserStore from '../Storages/UserStorage';

const TeacherOverviewPage = () => {
  const props = useLocation();
  let params = props.state 
  const {viewportWidth} = useContext(ThemeContext);
  const [user, setUser] = useState<UserDto>(params.user.user)
  const navigator = useNavigate()
  const {me} = useUserStore();

  const handleHomeIcon = () => {
      navigator(routes.home)
  }

  const [drop, setDrop] = useState(false);

  useEffect(() => {
      const intervalId = setInterval(() => {
        setDrop(true);
      }, 0);
  
      
      return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{position: "relative", minHeight: "fit-content"}}> 
      <div className='BackgroundTeacherOverview'>
          <header className='profileHeader'>
              <button>
                  <GoHome style= {{fontSize: `${viewportWidth < 1200 ? "30px" : "30px " }` }}onClick={handleHomeIcon}/>
              </button>
                
              <h1 className='profilePageHeaderText'>Teacher Overview</h1>  
          </header>
          <img src={learning} alt="ALoooo" className='IMGBackgound'/>
      </div>
      <div className='TeacherOverviewFieldAbsolute' style={{marginTop: `${drop ? "65vh" : "10vh" }`}}>
          <TeacherOverview user = {user}/>
      </div>
      <div className='PageInfo' style={{marginTop: `${drop ? "20vh" : "0vh"}`}}>
          <h1 style={{fontSize:"55px", color:"white"}}>Hello {me.username}</h1>
          <h1 style={{fontSize:"18px", color:"white"}}>
              This is Teacher overview page! You can see teacher's tags, description and everything you probable would need! If you want you can wrote comment to this teacher
          </h1>
          <button className='EditButton' style={{backgroundColor: "#5e72e4", border: "#5e72e4"}} onClick = {() => {navigator(routes.profilePage)}}>
            Profile Page
          </button>
      </div>
    </div>  
  )
}

export default TeacherOverviewPage
