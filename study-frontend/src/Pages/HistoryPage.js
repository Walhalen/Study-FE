import React, { useState } from 'react'
import { Menu } from '../Components/Menu'
import ClosedMenu from '../Components/ClosedMenu';

const HistoryPage = () => {
    const [clickedFa, setClickedFa] = useState(false);

    const handleFaBar = () => setClickedFa(!clickedFa) 
  

    return (
        <div>
            <ClosedMenu handleFaBar={handleFaBar}/>
            <div className={ clickedFa ? 'FlexableContainerHorizontal' : 'FlexableContainerVertical'}>
                {clickedFa && <Menu handleFaBar={handleFaBar}/> }
                <div>
                    Home Page
                </div>
            </div>
        </div>
        
    )
}


export default HistoryPage
