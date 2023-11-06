import React, { useState, useEffect } from 'react';
import Registration from '../Services/Authentication/Registration';
import { routes } from '../constants';
import { useNavigate } from 'react-router-dom';
import { FetchAllTags } from '../Services/Tags/FetchAllTags';
import { TagCard } from '../Components/TagCard';

type Props = {
    username: string, 
    email: string,
    password: string 
}

interface Tag{
  id : number,
  name : string,
  color : string 
}

export const SignInTagsSelector = ({username, email, password} : Props) => {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username : username,
        email : email,
        password : password,
        tags: []
    })
    const [error, setError] = useState<string | null>(null);
    const [tags, setTags] = useState<Tag[]>([]);
 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await FetchAllTags();
            setTags(data);
          } catch (error) {
            console.error("Error fetching data tags:", error);
            setError("Failed to fetch data tags");
          }
    
        };
    
        fetchData();
      }, []);

    const handleSubmit = async() => {
        try{  
            const response = await Registration(formData); 
            console.log(response);
            sessionStorage.setItem("jwtAccess", response.token); 
            
            navigate(routes.home);
        }catch(error)
        {
            console.log("Error: ", error); 
            
        }
    }



  return (
    <main className='LogAndSignBox'>
        <header>Study</header>
        <div className='centerBox'>
            <header className='headerLogIn'>
              Select Your teaching skills
            </header>
            <main className='tagField'>
                {tags.map((tag) => (
                    
                    <TagCard key={tag.id} name = {tag.name} color = {tag.color} tags={formData.tags} />
                   
                    // <div>
                    //   hello
                    // </div>
                ))}       
            </main>

        </div>
        
        
    </main>
  )
}
