import React, { useState } from 'react'
import '../cssFiles/teacherOverview.css'
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const TeacherOverview = () => {

  
    const [moreInfo, setMoreInfo] = useState(true);
    return (
      <main className='TeacherOverviewField'>
        <div className='OverviewField'>
          <section className='FirstSection'>
            <div className='TeacherIcon'>
              <CgProfile/>
            </div>
            <section className='SecondSection'>
              <h1 style={{fontSize: "45px", fontWeight: "bold"}}>
                Walhal123
              </h1>
              <div className='RatingButton'>
                <AiFillStar style={{color: '#fad02c', fontSize: '25px'}} />
                <h1>
                  7
                </h1>
              </div>
            </section>
          </section>
          <hr style={{marginTop: "20px", border:"1.2px solid #a7b2c2"}}/>
          <section className='TagSection'>
            <h1 className='SectionTitle'>
              Tags:
            </h1>
            <div className='TeacherTagField'>
              tags
            </div>
          </section>
          <section className='DescriptionSection'>
            <h1 className='SectionTitle'>
              Description: 
            </h1>
            <h1 className='DescriptionField'>
                Hello I am Ivan and i want to be your teacher
            </h1>
  
  
          </section>
          <section className='LastSection'>
            <button className='ChatNowButton'>
              Chat Now
            </button>
          </section>       
  
        </div>
        <button className='MoreInfoButton' onClick={() => setMoreInfo(!moreInfo)}>
          {
            moreInfo ? 
            <IoIosArrowBack />
            : 
            <IoIosArrowForward />
          }
        </button>
        {
          moreInfo && 
          <div style={{height: "700px", display: "flex", flexDirection: "column"}}>
            <section className='MoreInfoSection'>
              <h1 className='MoreInfoTitle'>
                More Information
              </h1>
            </section>
            <section className='TeacherPageInfo'>
              alo da
            </section>
          </div>
  
        }

      </main>
    )
  }

export default TeacherOverview
