import React, { useState } from 'react'
import { routes } from '../constants';
import { useNavigate } from 'react-router-dom';
import MenuButton from './MenuButton';

export const Menu = ({handleFaBar}) => {



  return (
    
    <div className='FlexableContainer'>
        <div className='sideBar'>
            <div className='topSideBar'>
                <h2 >Study</h2>
            </div>

            <div className='downSideBar'>
                <MenuButton text={"Home Page"} page="home" handleFaBar={handleFaBar}/>
                <MenuButton text={"Find your teacher"} page="searchPage" handleFaBar={handleFaBar}/>
                <MenuButton text={"Favorites"} page="favorites" handleFaBar={handleFaBar}/>
                <MenuButton text={"History"} page="history" handleFaBar={handleFaBar}/>
            </div>

        </div>
    </div>
    
  )
}
