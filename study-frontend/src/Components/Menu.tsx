import React, { useState } from 'react'
import { routes } from '../constants';
import { useNavigate } from 'react-router-dom';
import MenuButton from './MenuButton';

type Props = {
  handleFaBar: () => void
}


export const Menu = ({handleFaBar} : Props) => {
  return (
    <div className = 'FlexableContainer'>
      <div className='sideBar'>
        {/* <div className='topSideBar'>
            <h2 >Study</h2>
        </div> */}
        
        <div className='downSideBar'>
          <MenuButton text={"Home Page"} page="home" handleFaBar={handleFaBar} style="menuButton" />
          <MenuButton text={"Find your teacher"} page="searchPage" handleFaBar={handleFaBar} style="menuButton" />
          <MenuButton text={"Favorites"} page="favorites" handleFaBar={handleFaBar} style="menuButton" />
          <MenuButton text={"History"} page="history" handleFaBar={handleFaBar} style="menuButton" />
          <div className='SpacerHeight'></div>
          <MenuButton text={"Sign out"} page="signOut" handleFaBar={handleFaBar} style="SignOutButton" />
        </div>
      </div>
    </div>
  );
};

export default Menu;