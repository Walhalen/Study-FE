import React from 'react'
import '../cssFiles/historyPage.css'
import '../cssFiles/favoritesPage.css'
import dreamingMen1 from '../assets/HistoryPageIMage1.jpg'
import dreamingMen2 from '../assets/HIstoryPageImage2.jpg'
import dreamingMen3 from '../assets/HistoryPageImage3.jpg'
import { MdOutlineHistoryEdu } from "react-icons/md";
import historyIcon from '../assets/historyIcon(1).png'
const HistoryPageInfo = () => {
  return (
    <section className='HistoryPageInfo'>
        <img src={dreamingMen3} alt="Favorite Teacher" className='FavTeacherIMG'/>
        <div>
            <h1 className='FavoritePageText'>
                This is the place where you can manage and organize the teachers you admire, making it easier to connect with them later.
            </h1>
            <hr style={{border:"1.2px solid rgb(100, 130, 156)"}}/>
        </div>
        <img src={historyIcon} alt="Favorite Teacher" className='FavTeacherIMG'/>
        
    </section>
  )
}

export default HistoryPageInfo
