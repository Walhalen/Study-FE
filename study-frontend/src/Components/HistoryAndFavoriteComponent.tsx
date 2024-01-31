import React, { useState } from 'react'
import { MdHistory } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

export const HistoryAndFavoriteComponent = () => {
    const [favoriteOrHistory, setFavoriteOrHistory] = useState(true);
    return (
        <div>
            <div className='historyOrFavoriteButton'>
                <button className = "FavoriteButton" style = {{width: `${favoriteOrHistory ? "100%" : "30%" }`, backgroundColor: "white"}} onClick={() => {setFavoriteOrHistory(!favoriteOrHistory)}}>
                    <MdHistory />
                </button>
                
                <button className =  "HistoryButton" style = {{width: `${favoriteOrHistory ? "30%" : "100%" }`, backgroundColor: "white"}} onClick={() => {setFavoriteOrHistory(!favoriteOrHistory)}}>
                    <MdFavorite />
                </button>
                
            </div>
        </div>
    )
}
