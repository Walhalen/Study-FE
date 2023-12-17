import React, { useState, useEffect } from 'react';
import Registration from '../Services/Authentication/Registration';
import { routes } from '../constants';
import { useNavigate } from 'react-router-dom';
import { FetchAllTags } from '../Services/Tags/FetchAllTags';
import {TagCardSignIn } from './TagCardSignIn';
import '../cssFiles/loginSignInPage.css'
import useUserStore from '../Storiges/UserStorage';


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
        description : ""
    })
    const [myTags, setMyTags] = useState<Tag[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [tags, setTags] = useState<Tag[]>([]);
    const [nextStep, setNextStep] = useState(false)
    const { setMe, me} = useUserStore();
    


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

            const response = await Registration({formData, myTags}); 
            sessionStorage.setItem("jwtAccess", response.token); 
            setMe(response.user)
            console.log(me)
            navigate(routes.home);
        }catch(error)
        {
            console.log("Error: ", error); 
            
        }
    }



  return (
 
        <div className='centerBox'>

          
            {
              !nextStep ?              
               <>
               <header className='headerLogIn'>
                  Select Your teaching skills
               </header><div className='tagField'>
                {tags.map((tag) => (

                  <TagCardSignIn key={tag.id} name={tag.name} color={tag.color} setTags={setMyTags} tags={myTags} />
                ))}
                </div><button type="submit" className='submitButton' onClick={() => setNextStep(!nextStep)}>
                  Next step
                </button></>
              : 
              <>                
                <header className='headerLogIn'>
                  Write simple description
                </header>

                <label htmlFor="description">
                  Description: 
                </label>
                <textarea className='DescriptionInput'
                 
                  id="description"
                  name="description"
                  placeholder="Enter your Description"
                  value={formData.description}
                  onChange={(e) => {
                      setFormData({
                        username: formData.username,
                        email: formData.email,
                        password: formData.password,
                        description: e.target.value
                      }
                      )  
                  }}
                
                />
                <div><button type="submit" className='submitButton' onClick={handleSubmit}>
                  Sumbit
                </button></div>
                <div><button type="submit" className='submitButton' onClick={() => setNextStep(!nextStep)}>
                  Previous Step
                </button></div>
                
              </>

            }

      </div>

  )
}