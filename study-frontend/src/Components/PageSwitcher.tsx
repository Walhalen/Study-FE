import React, {useEffect, useState, useContext} from 'react'
import '../cssFiles/pageSwitcher.css'
import { MdChevronRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FetchPagesCount } from '../Services/User/FetchPagesCount';
import { Tag } from '../Types/TagInterfaces';
import { ThemeContext } from '../Context/ThemeContext';

type Props = {
    page: number; 
    setPage: (page: number) => void;
    searchValue: string;
    tag: string
}

export const PageSwitcher = ({page, setPage, searchValue, tag}: Props) => {
    const [pages, setPages] = useState(0);
    const [shortCut1, setShortCut1] = useState(0);
    const [shortCut2, setShortCut2] = useState(0);
    const [shortCut3, setShortCut3] = useState(0);
    const {viewportWidth} = useContext(ThemeContext);
    
    useEffect(() => {
        const fetchPages = async() => {
            try{
               
                if(tag === ""){
                    const subjectId = "";
                    const response = await FetchPagesCount({searchValue, subjectId}); 
                    setPages(response);
                }
                else
                {
                    const subjectId = tag;
                    const response = await FetchPagesCount({searchValue, subjectId}); 
                    setPages(response);
                }
               

            }catch(error)
            {
                console.log("can't fetch the count of pages ")
            }
        }

        fetchPages()
    }, [searchValue])  
    
    
    useEffect(()=>{
        const changeShortCuts = () => {
            if(pages !== 0)
            {
                if(page + 4 < pages){
                    setShortCut1(page + 1);
                    setShortCut2(page + 2);
                    setShortCut3(page + 3); 

                }else{
                    setShortCut1(pages - 3);
                    setShortCut2(pages - 2);
                    setShortCut3(pages - 1);
                }
            }

            
        }

        changeShortCuts();
        
    }, [page, pages])
  
    const handleNext = () => {
        if(pages)
        {
            
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

    const handleShortCuts = (page : number) => {
        setPage(page);
    }   

    return (
    pages!= 0 ?    
    <div className='PageSwitcherField'>
        
           
        {/* <MdKeyboardArrowLeft/> */}
            {viewportWidth < 780 ? 
                <button onClick={handlePrev}>
                    <MdKeyboardArrowLeft style = {{fontSize: "40px"}}/>
                </button>:
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
                
            }
            <div className='ShortCutsField'>
                {page+1 <= pages && pages > 1 && <button onClick={() => {handleShortCuts(shortCut1 - 1)}} className={`${(pages > 4 && page + 4 < pages) ||( page + 4 == pages) ? "DirectPageButtonActive" : "DirectPageButton"}`}>{shortCut1}</button>}
                {pages > 2 && <button onClick={() => {handleShortCuts(shortCut2 - 1)}} className={'DirectPageButton' + `${page + 3 == pages ? "Active" : ""}`}>{shortCut2}</button>}
                {pages > 3 &&<button onClick={() => {handleShortCuts(shortCut3 - 1)}} className={'DirectPageButton' + `${page + 2 == pages ? "Active" : ""}`}>{shortCut3}</button>}
                {pages > 4 && page + 4 < pages && <h1 style={{ fontSize: `${viewportWidth < 780 ? "20px" : "30px"}`, marginTop: `${viewportWidth < 780 ? "15px" : "20px"}`}}>...</h1>}
                <button onClick={() => {handleShortCuts(pages - 1)}} className={'DirectPageButton' + `${page + 1 == pages ? "Active": ""}`}>{pages}</button>
            </div>
              
            {
                viewportWidth < 780 ? 
                <button onClick={handleNext}>
                    <MdChevronRight style = {{fontSize: "40px", color: "black"}}/> 
                </button>:
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
            }
          

        {/* <MdChevronRight/> */}
       

    </div>
    : 
    <h1 style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
        Nothing here
    </h1>
    
  )
}
