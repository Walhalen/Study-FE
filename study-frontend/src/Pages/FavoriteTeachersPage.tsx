import React, { useState } from 'react'
import { Menu } from '../Components/Menu'
import ClosedMenu from '../Components/Header';

const FavoriteTeachersPage = () => {
    const [clickedFa, setClickedFa] = useState(false);

    const handleFaBar = () => setClickedFa(!clickedFa) 
  

    return (
        <div>
            <header className='header'>
                <ClosedMenu handleFaBar={handleFaBar}/>
            </header>
            <div className={ clickedFa ? 'FlexableContainerHorizontal' : 'FlexableContainerVertical'}>
                {clickedFa && <Menu handleFaBar={handleFaBar}/> }
                <div>
                    Your favorite teachers
                </div>
            </div>
        </div>
    )
}

export default FavoriteTeachersPage
