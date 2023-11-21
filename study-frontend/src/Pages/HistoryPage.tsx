import React, { useState } from 'react'
import { Menu } from '../Components/Menu'
import ClosedMenu from '../Components/Header';
import { CiSearch } from "react-icons/ci";


interface MenuPage{
    name: string,
    rout: string, 
    style: string,

  }

const FavoriteTeachersPage = () => {
    const [clickedFa, setClickedFa] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const handleFaBar = () => setClickedFa(!clickedFa) 
    const handleIsSearching = () => setIsSearching(!isSearching);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [clickedProfile, setClickedProfile] = useState(false);
    const handleProfileBar = () => setClickedProfile(!clickedProfile);

    React.useEffect(() => {
  
      window.addEventListener("resize", () => setViewportWidth(window.innerWidth));
  
  
    }, []);
    

   
  let pages : MenuPage[] = [];
  let pages2 : MenuPage[] = []; 

  if (viewportWidth > 780) {
    if(viewportWidth < 1250)
    {
      pages2 = [
        {
          name: "Home Page",
          rout: "home",
          style: "SideBarButton",

        },
        {
          name: "Messages",
          rout: "searchPage",
          style: "SideBarButton",

        },
        {
          name: "Favorites",
          rout: "favorites",
          style: "SideBarButton",

        },
        {
          name: "History",
          rout: "history",
          style: "SideBarButton",

        },
      ];
    }

      pages  = [
        {
          name: "Your Profile",
          rout: "profile",
          style: "SideBarButton",

        },
        {
          name: "Sign out",
          rout: "signOut",
          style: "SignOutButton",

        },
      ];
    
  } else {
    
    pages = [
      {
        name: "Home Page",
        rout: "home",
        style: "SideBarButton",

      },
      {
        name: "Messages",
        rout: "searchPage",
        style: "SideBarButton",

      },
      {
        name: "Favorites",
        rout: "favorites",
        style: "SideBarButton",

      },
      {
        name: "History",
        rout: "history",
        style: "SideBarButton",

      },
      {
        name: "Sign out",
        rout: "signOut",
        style: "SignOutButton",

      },
    ];
    
  }

    return (
        <div>
            <header className='header'>
              <ClosedMenu handleFaBar={handleFaBar} handleProfileBar = {handleProfileBar} handleIsSearching = {handleIsSearching} searching ={isSearching}/>
            </header>
            <div >
                
                {viewportWidth < 1250 && 
                  <div>
                    {clickedFa && <Menu handleFaBar={handleFaBar} pages = {pages2} style = "sideBar"/> }
                  </div>
                }
                <div>
                  {clickedProfile && <Menu handleFaBar={handleProfileBar} pages = {pages} style = "profileSideBar"/> }
                </div>
                <main>
                {viewportWidth < 780 &&         
                <div style= {{display:'flex', justifyContent:'center', width:'100%'}}>
                    {isSearching &&          
                    <div className='SearchBarField'>
                        <input type="text" placeholder="Search" className="SearchBar" />
                        <span className='iconInsideSearch'><CiSearch id='SearchIcon' /></span>
                    </div>
                    }
                </div>
                }
                    History page
                </main>
            </div>
        </div>
    )
}

export default FavoriteTeachersPage
