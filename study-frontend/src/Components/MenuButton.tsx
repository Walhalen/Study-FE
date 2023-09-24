import React from 'react'
import { useNavigate } from 'react-router-dom';
import { page, routes } from '../constants';
import HomePage from '../Pages/HomePage';

type Props = {
  text : string, 
  page : string,
  handleFaBar : ()=>void,
  style : string
}

const MenuButton = ({text, page, handleFaBar, style} : Props) => {

    const navigate = useNavigate();

    function handleClick(page : string) {
        
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
        <button className={style} onClick={()=>{
            handleClick(page);
        }}>
            {text}
        </button>
    )
}

export default MenuButton