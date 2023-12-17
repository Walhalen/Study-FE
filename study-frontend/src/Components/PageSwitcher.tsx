import React, {useEffect, useState} from 'react'
import '../cssFiles/pageSwitcher.css'
import { MdChevronRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FetchPagesCount } from '../Services/User/FetchPagesCount';

type Props = {
    page: number; 
    setPage: (page: number) => void;
}

export const PageSwitcher = ({page, setPage}: Props) => {
    const [pages, setPages] = useState();
    
    useEffect(() => {
        const fetchPages = async() => {
            try{
                const response = await FetchPagesCount(); 
                setPages(response);

            }catch(error)
            {
                console.log("can't fetch the count of pages ")
            }
        }

        fetchPages()
    }, [])    
  
    const handleNext = () => {
        if(pages)
        {
            console.log(page)
            if(page + 1 < pages) 
            {
                setPage(page + 1); 
            }
        }
        
    }
    
    const handlePrev = () => {
        console.log(page)
        if(page - 1 >=  0)
        {
            setPage(page - 1);
        }
    }


    return (
    <div className='PageSwitcherField'>

        {/* <MdKeyboardArrowLeft/> */}
            <button className='PrevPageButton' onClick={handlePrev}>
                <MdKeyboardArrowLeft style = {{fontSize: "40px"}}/>
                <div style={{display:"flex", flexDirection:"column", alignItems:"start"}}>
                    <h3 style={{fontSize: "14px", color:"gray", fontWeight:"400"}}>
                        Prev
                    </h3>
                    <h1 style={{fontSize: "18px", fontWeight:"500"}}>
                        Page
                    </h1>
                </div>
            </button>
            {pages && (
                <div style= {{display: "flex", marginLeft: "100px", marginRight: "100px", gap: "5px"}}>
                    {page+1 <= pages && <button className={`${(pages > 4 && page + 4 < pages) ||( page + 4 == pages) ? "DirectPageButtonActive" : "DirectPageButton"}`}>{page + 4 < pages ? page + 1 : pages - 3}</button>}
                    {pages > 2 && <button className={'DirectPageButton' + `${page + 3 == pages ? "Active" : ""}`}>{page + 4 < pages ? page + 2 : pages - 2}</button>}
                    {pages > 3 &&<button className={'DirectPageButton' + `${page + 2 == pages ? "Active" : ""}`}>{page + 4  < pages ? page + 3 : pages - 1}</button>}
                    {pages > 4 && page + 4 < pages && <h1 style={{ fontSize: "30px", marginTop:"20px"}}>...</h1>}
                    <button className={'DirectPageButton' + `${page + 1 == pages ? "Active" : ""}`}>{pages}</button>
                </div>
                )
            }
            <button className='NextPageButton' onClick={handleNext}> 
                <div style={{display:"flex", flexDirection:"column", alignItems:"start"}}>
                    <div style={{width: "100%", display: "flex", justifyContent: "end"}}>
                        <h3 style={{fontSize: "14px", color:"#737c85", fontWeight:"400"}}>
                            Next
                        </h3>
                    </div>

                    <h1 style={{fontSize: "18px", fontWeight:"500", color: "#cad0d8"}}>
                        Page
                    </h1>
                </div>
                <MdChevronRight style = {{fontSize: "40px", color: "#cad0d8"}}/> 
            </button>            

        {/* <MdChevronRight/> */}
    </div>
  )
}
