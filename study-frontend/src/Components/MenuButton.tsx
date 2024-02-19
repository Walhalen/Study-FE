import React from 'react'
import { useNavigate } from 'react-router-dom';
import {  routes } from '../constants';
import HomePage from '../Pages/HomePage';
import useJWTStore from '../Storages/JWTStorage';
import { GoHome } from "react-icons/go";
import useUserStore from '../Storages/UserStorage';
type Props = {
  text : string, 
  page : string,
  handleFaBar : ()=>void,
  style : string
}

const MenuButton = ({text, page, handleFaBar, style} : Props) => {

    const navigate = useNavigate();
    const { setAuthenticated} = useJWTStore();
    const { setMe } = useUserStore(); 
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
        case "signOut":
        {
            setAuthenticated(false)
            handleFaBar()
            sessionStorage.clear();
            setMe({ 
              username: "",
              email: "",
              rating: 0,
              tags: [],
              favorites: [],
              history: [], 
              description: "" 
            })
            navigate(routes.login);
            break;
        }
        case "profile":
        {
            handleFaBar()
            navigate(routes.profilePage);
            break;
        }
          default: break;
        }
    }

    return (
        <button className={style} onClick={()=>{  
          handleClick(page);
        }}>
          {/* <GoHome /> */}
          {text}
        </button> 
    )
}

export default MenuButton
