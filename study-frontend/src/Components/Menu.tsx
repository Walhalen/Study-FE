import React, { useContext, useState } from 'react'
import { routes } from '../constants';
import { useNavigate } from 'react-router-dom';
import MenuButton from './MenuButton';
import { ThemeContext } from '../Context/ThemeContext';

interface MenuPage{
  name: string,
  rout: string, 
  style: string,
}

type Props = {
  handleFaBar: () => void
  pages: Array<MenuPage>
  style: string
}


export const Menu = ({handleFaBar, pages, style} : Props) => {

  const {viewportWidth} = useContext(ThemeContext);


  return (
    <nav className={style}>
      
        <ul >
          {pages.map((page) => {
                if(page.name === "Sign out" && viewportWidth < 780){
                  return (
                      <div key={page.name}  className='SpacerHeight'></div>                    
                  )
                }
                return <MenuButton key={page.name} text={page.name} page={page.rout} handleFaBar={handleFaBar} style={page.style} />
              }
            )
          }
          {viewportWidth < 780 && <MenuButton text={"Sign out"} page="signOut" handleFaBar={handleFaBar} style="SignOutButton" />}
          
        </ul>





    </nav>



    // <nav >
    //   <div className='sideBar'>
        
    //     <ul className='downSideBar'>
    //       <MenuButton text={"Home Page"} page="home" handleFaBar={handleFaBar} style="menuButton" />
    //       <MenuButton text={"Messeges"} page="searchPage" handleFaBar={handleFaBar} style="menuButton" />
    //       <MenuButton text={"Favorites"} page="favorites" handleFaBar={handleFaBar} style="menuButton" />
    //       <MenuButton text={"History"} page="history" handleFaBar={handleFaBar} style="menuButton" />
    //       <div className='SpacerHeight'></div>
    //       <MenuButton text={"Sign out"} page="signOut" handleFaBar={handleFaBar} style="SignOutButton" />
    //     </ul>
    //   </div>
    // </nav>
  );
};
