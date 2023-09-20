import React from 'react'
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import HomePage from '../Pages/HomePage';

const MenuButton = ({text, page, handleFaBar}) => {

    const navigate = useNavigate();

    function handleClick(page) {
        
        switch (page) {
          case "home":
          {
            handleFaBar()
            navigate(routes.home);
            break;
          }
          case "searchPage":
          {
            handleFaBar()
            navigate(routes.searchPage);
            break;
          }
        case "favorites":
        {
            handleFaBar()
            navigate(routes.favorite);
            break;
        }
        case "history":
        {
            handleFaBar()
            navigate(routes.history);
            break;
        }
          default: break;
        }
    }

    return (
        <button className='menuButton' onClick={()=>{
            handleClick(page);
            
        }}>
            {text}
        </button>
    )
}

export default MenuButton
