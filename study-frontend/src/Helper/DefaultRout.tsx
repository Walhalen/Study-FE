import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../constants';

const DefaultRout = () => {
  const navigator = useNavigate();

  navigator(routes.home)
  return(
   <div></div>
  )
}


export default DefaultRout

