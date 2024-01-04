import React, { useContext, useState } from 'react'
import { Menu } from '../Components/Menu'
import ClosedMenu from '../Components/Header';
import { CiSearch } from "react-icons/ci";
import FilterDropDown from '../Components/FilterDropDown';
import { largeScreenProfileMenu, mediumScreenMenu, smallScreenMenu } from '../constants';
import { ThemeContext } from '../Context/ThemeContext';


interface MenuPage{
    name: string,
    rout: string, 
    style: string,

  }

const FavoriteTeachersPage = () => {
    const [clickedFa, setClickedFa] = useState(false);
    
    const handleFaBar = () => setClickedFa(!clickedFa) 
  
    
    const [clickedProfile, setClickedProfile] = useState(false);
    const handleProfileBar = () => setClickedProfile(!clickedProfile);
    const [filterDropDown, setFilterDropDown] = useState(false);
    const hanleFilterDropDown = () => setFilterDropDown(!filterDropDown);


    
    const {viewportWidth} = useContext(ThemeContext);

    
    let ProfileMenuPages : MenuPage[] = [];
    let MenuPages : MenuPage[] = []; 
  
    if (viewportWidth > 780) {
      if(viewportWidth < 1250)
      {
        MenuPages = mediumScreenMenu
      }
  
        ProfileMenuPages  = largeScreenProfileMenu
      
    } else {
      
      MenuPages = smallScreenMenu
      
    }
  

    return (
        <div>
            <header className='header'>
              <ClosedMenu handleFaBar={handleFaBar} handleProfileBar = {handleProfileBar} handleFilterDropDown = {hanleFilterDropDown}  filterDropDown = {filterDropDown}/>
            </header>
            <div >

                {viewportWidth < 1250 && 
                  <div>
                    {clickedFa && <Menu handleFaBar={handleFaBar} pages = {MenuPages} style = "sideBar"/> }
                  </div>
                }
                <div>
                  {clickedProfile && <Menu handleFaBar={handleProfileBar} pages = {ProfileMenuPages} style = "profileSideBar"/> }
                </div>  
                <main>

                    History page
                </main>
            </div>
        </div>
    )
}

export default FavoriteTeachersPage
