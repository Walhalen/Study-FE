import React, { useContext, useState } from 'react'
import { MdHistory } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import useUserStore from '../Storages/UserStorage';
import { ThemeContext } from '../Context/ThemeContext';
import { FavoriteOrHistoryTeacherCard } from './FavoriteOrHistoryTeacherCard';
import TeacherCard from './TeacherCard';
import { reverse } from 'dns';

export const HistoryAndFavoriteComponent = () => {
    const [favoriteOrHistory, setFavoriteOrHistory] = useState(true);
    const {me} = useUserStore();
    const {viewportWidth} = useContext(ThemeContext);
    
    return (
        <section style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className='historyOrFavoriteButton'>
                <button className = "HistoryButton" style = {{width: `${favoriteOrHistory ? "100%" : "30%" }`, backgroundColor: `${favoriteOrHistory ? "white" : "#f3f4f6" }`}} onClick={() => {setFavoriteOrHistory(true)}}>
                    {
                        favoriteOrHistory && <h1 style={{fontSize: "20px"}}>Your History</h1>
                    }
                    <MdHistory />
                </button>
                
                <button className =  "FavoriteButton" style = {{width: `${favoriteOrHistory ? "30%" : "100%" }`, backgroundColor: `${favoriteOrHistory ? "#f3f4f6" : "white" }`}} onClick={() => {setFavoriteOrHistory(false)}}>
                    <MdFavorite />
                    {
                        !favoriteOrHistory && <h1 style={{fontSize: "20px"}}>Your Favorites</h1>
                    }
                </button>

            </div>
            {
                !favoriteOrHistory ?<> 
                    {
                        viewportWidth > 850 ? 
                        <div className='FavoriteField'>           
                            {
                            me.favorites.map((user) => (
                                <FavoriteOrHistoryTeacherCard key={user.username} user={user} historyOrFavorite={false}/>
                            ))
                            }
                        </div>
                        :
                        <div className='cardField'>
                            {me.favorites.map((user) => (
                                <TeacherCard key={user.username} user = {user} />
                            ))}
                        </div>
                    }
                </>
                : 
                <>
                    {
                        viewportWidth > 850 ? 
                        <div className='FavoriteField'>       
                                {
                                    me.history.map((user) => (
                                        <FavoriteOrHistoryTeacherCard key={user.username} user={user} historyOrFavorite={true}/>
                                    ))
                                }
                        </div>
                        :
                        <div className='cardField' style = {{display:"flex", flexDirection: 'column-reverse'}}>
                            {me.history.map((user) => (
                                <TeacherCard key={user.username} user = {user} />
                            ))}
                        </div>
                    }
                </>
            }

        </section>
    )
}
