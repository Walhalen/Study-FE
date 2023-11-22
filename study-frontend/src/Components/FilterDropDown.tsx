import React, {useState, useEffect} from 'react'
import '../cssFiles/mainMenu.css'
import { FetchAllTags } from '../Services/Tags/FetchAllTags'
import TagCard from './TagCard'
import TagCardFilterDropDown from './DropDownFilterButton'

interface Tag{
    id : number,
    name : string,
    color : string 
}


const FilterDropDown = () => {
    const [tags, setTags] = useState<Tag[]>([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await FetchAllTags();
            setTags(data);

          } catch (error) {
            console.error("Error fetching data tags:", error);
           
          }
    
        };
    
        fetchData();
      }, [])
        
    return (
        <div className='filterDropDown'>
            {tags && 
            
                tags.map((tag)=>(
                    <div style={{width:"100%"}}>
                        <TagCardFilterDropDown key={tag.id} name = {tag.name} color = {tag.color}/>
                    </div>
                    
                ))
            }
        </div> 
    )
}

export default FilterDropDown
