import React from 'react'
import { routes } from '../constants';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {

    const navigate = useNavigate;
    function handleClick(clicked, role) {
    
        switch (clicked) {
          case "home":
          {
            navigate(routes.home, { state: { role: role, clicked: clicked } });
            break;
          }
          case "searchPage":
          {
            navigate(routes.searchPage, { state: { role: role, clicked: clicked } });
            break;
          }
          default: break;
        }
    }


  return (
    <div className='sideBar'>
        <div></div>
    </div>
  )
}
