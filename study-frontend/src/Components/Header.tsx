import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
import '../cssFiles/mainMenu.css'
import { CiSearch } from "react-icons/ci";
import { LuSearchX } from "react-icons/lu";
import { Menu } from './Menu';
import { CgProfile } from "react-icons/cg";
import { BsFilterLeft } from "react-icons/bs";
import Dropdown from 'react-dropdown-select';



interface MenuPage{
  name: string,
  rout: string, 
  style: string,
 
}

type Props = {
  handleFaBar: ()=>void,
  handleIsSearching: ()=>void
  searching: boolean
  handleProfileBar: () => void
}

const Header = ({handleFaBar, handleIsSearching, searching, handleProfileBar}: Props) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
  React.useEffect(() => {

    window.addEventListener("resize", () => setViewportWidth(window.innerWidth));


  }, []);

  const pages : MenuPage[] = [
    {
      name: "Home Page",
      rout: "home",
      style: "NavBarButtons",

    },
    {
      name: "Messeges",
      rout: "searchPage",
      style: "NavBarButtons",

    },
    {
      name: "Favorites",
      rout: "favorites",
      style: "NavBarButtons",

    },
    {
      name: "History",
      rout: "history",
      style: "NavBarButtons",

    },

  ];


  return (
    <div className='closedSideBar'>
      {viewportWidth < 780 ? (
        <React.Fragment>
          <div className='MenuIcon'>
            <HiMenuAlt2   onClick={handleFaBar} />
          </div>
          <div className='closedSideBarText'>
            Study
          </div>
          <button id='SearchIconBox' onClick={handleIsSearching}>
            {searching ? 
              <LuSearchX id='NotSearchIcon'/>
              :
              <CiSearch id='SearchIcon' />
            }
          </button >
        </React.Fragment>
      ) : (
        <React.Fragment>
          {viewportWidth < 1250 ? 
          (
            <React.Fragment>
              <div className='MenuIcon'>
                <HiMenuAlt2   onClick={handleFaBar} />
              </div>
              <div className='closedSideBarText'>
                Study
              </div>

              
              
              <div className='SearchBarField'>
                <input type="text" placeholder="Search" className="SearchBar" />
                <span className='iconInsideSearch'><CiSearch id='SearchIcon' /></span>
              </div>
              <div className='ProfileIcon'>
                <CgProfile onClick={handleProfileBar} />
              </div>
            </React.Fragment>
          ): 
          (
            <React.Fragment>
              <div className='closedSideBarText'>
                Study
              </div>

              <Menu handleFaBar={() => {}} pages={pages} style='NavBarField'/>
              
              <div style={{display:'flex', alignItems: 'center', position: 'relative'}}>
                <button className='filterButton'>
                  <BsFilterLeft />
                  {/* <h1>filter</h1> */}

                </button>
                <div className='filterDropDown'>as</div>
              </div>
              



              <div className='SearchBarField'>
                <input type="text" placeholder="Search" className="SearchBar" />
                <span className='iconInsideSearch'><CiSearch id='SearchIcon' /></span>
              </div>
              <div className='ProfileIcon'>
                <CgProfile onClick={handleProfileBar} />
              </div>
            </React.Fragment>
          )}

        </React.Fragment>
      )}
    </div> 
  )
}

export default Header
