import React, { useContext, useState } from 'react'
import '../cssFiles/favoritesPage.css'
import FavTeacher from '../assets/favoriteTeacher.png'
import ClickMeHeart from '../assets/ClickMeHeart.png'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { ThemeContext } from '../Context/ThemeContext';


const FavoritesPageInfo = () => {

    const [fillHeart, setFillHeart] = useState(false);

    const handleHeart = () => {
        setFillHeart(!fillHeart);
    }

    const {viewportWidth} = useContext(ThemeContext);

    return (
        <div className='FavoritesPageInfo'>
            {
                viewportWidth > 1280 && <img src={FavTeacher} alt="Favorite Teacher" className='FavTeacherIMG'/>
            }
            
            <div>
                <h1 className='FavoritePageText'>
                    This is the place where you can manage and organize the teachers you admire, making it easier to connect with them later.
                </h1>
                <hr style={{border:"1.2px solid rgb(100, 130, 156)"}}/>
            </div>
            {
                viewportWidth > 780 && 
                <>
                    {
                        !fillHeart ? 
                        <button className='FavoriteHeartEmote' onClick={handleHeart}>
                            <IoMdHeartEmpty style = {{color:"rgb(242, 146, 162)"}} className='FavTeacherIMG'/>
                            <h1 className='FavoriteHeartTextEmpty'>
                                Click me
                            </h1>
                        </button>:
                        <button className='FavoriteHeartEmote' onClick={handleHeart}>
                            <IoMdHeart style = {{color:"rgb(242, 146, 162)"}} className='FavTeacherIMG'/>
                            <h1 className='FavoriteHeartTextFill'>
                                Now I'm in favorites
                            </h1>
                        </button>
                    }
                </>
            }        
        </div>
    )
}

export default FavoritesPageInfo
