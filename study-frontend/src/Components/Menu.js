import React from 'react'
import { routes } from '../constants';
import { useNavigate } from 'react-router-dom';
import MenuButton from './MenuButton';

export const Menu = () => {

    


  return (
    <div className='FlexableContainer'>
        <div className='sideBar'>
            <div className='topSideBar'>
                <h2 >Study</h2>
            </div>

            <div className='downSideBar'>
                <MenuButton text={"Home Page"} page="home"/>
                <MenuButton text={"Find your teacher"} page="searchPage"/>
                <MenuButton text={"Favorites"} page="favorites"/>
                <MenuButton text={"History"} page="history"/>
            </div>

        </div>
    </div>
  )
}
