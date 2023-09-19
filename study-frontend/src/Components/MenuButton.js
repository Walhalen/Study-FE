import React from 'react'
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import HomePage from '../Pages/HomePage';

const MenuButton = ({text, page}) => {

    const navigate = useNavigate();

    function handleClick(page) {
        
        switch (page) {
          case "home":
          {
            navigate(routes.home);
            break;
          }
          case "searchPage":
          {
            navigate(routes.searchPage);
            break;
          }
        case "favorites":
        {
            navigate(routes.favorite);
            break;
        }
        case "history":
            {
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
