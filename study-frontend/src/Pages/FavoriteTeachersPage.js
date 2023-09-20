import React, { useState } from 'react'
import { Menu } from '../Components/Menu'
import ClosedMenu from '../Components/ClosedMenu';

const FavoriteTeachersPage = () => {
    const [clickedFa, setClickedFa] = useState(false);

    const handleFaBar = () => setClickedFa(!clickedFa) 
  

    return (
        <div className={ clickedFa ? 'FlexableContainerHorizontal' : 'FlexableContainerVertical'}>
            {clickedFa ? <Menu handleFaBar={handleFaBar}/> : <ClosedMenu handleFaBar={handleFaBar}/>}
            <div>
                Home Page
            </div>
        </div>
    )
}

export default FavoriteTeachersPage
