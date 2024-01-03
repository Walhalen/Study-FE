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

    
    let pages : MenuPage[] = [];
    let pages2 : MenuPage[] = []; 
    

    if (viewportWidth > 780) {
      if(viewportWidth < 1250)
      {
        pages2 = mediumScreenMenu
      }

        pages  = largeScreenProfileMenu
      
    } else {
      
      pages2 = smallScreenMenu
      
    }
  

    return (
        <div>
            <header className='header'>
              <ClosedMenu handleFaBar={handleFaBar} handleProfileBar = {handleProfileBar} handleFilterDropDown = {hanleFilterDropDown}  filterDropDown = {filterDropDown}/>
            </header>
            <div >
                  {filterDropDown &&           
                  <FilterDropDown/>      
                }
                {viewportWidth < 1250  && 
                  <div>
                    {clickedFa && <Menu handleFaBar={handleFaBar} pages = {pages2} style = "sideBar"/> }
                  </div>
                }
                {/* {viewportWidth < 780 && 
                  <div>
                    {clickedFa && <Menu handleFaBar={handleFaBar} pages = {pages} style = "sideBar"/> }
                  </div>
                } */}
                <div>
                  {clickedProfile && <Menu handleFaBar={handleProfileBar} pages = {pages} style = "profileSideBar"/> }
                </div>
                <main>

                    Favorites page
                </main>
            </div>
        </div>
    )
}

export default FavoriteTeachersPage
