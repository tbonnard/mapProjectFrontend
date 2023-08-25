
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'

import { resetProjects } from '../../reducers/projectReducer';
import { resetProperty } from '../../reducers/propertyReducer';
import { setNotification } from '../../reducers/notificationTempReducer'

import '../../styles/header.css'
import notificationIcon from '../../media/notification.png'


const Header = () => {
    
  const dispatch = useDispatch()

  const property = useSelector(state => state.property)
  const user = useSelector(state => state.user)
  
  const [classHeader, setclassHeader] = useState('App-headerGlobal')

  useEffect(() => {
    if (window.location.pathname !== '/')  {
       setclassHeader('App-headerGlobal' );
    } else {
      setclassHeader('App-headerHome')
    }
  },[property])


  const handleClick = () => {
    // localStorage.removeItem('propertyProjectApp')
    dispatch(resetProperty())
    dispatch(resetProjects())
    window.scrollTo(0,0);
    if (window.location.pathname === '/')
    {
    window.location.reload(false);
    }
  }


  const handleClickNotification = () => {
      if (!user) {
        dispatch(setNotification({message:'you must be logged in to follow that place', style:'warning'}))
      }
  }


  return (
    <div className={classHeader}>
      <div className='App-header'>
        <div className='App-header-divLogo'>
          <Link className='' to="/" onClick={handleClick}>[appName]</Link>
        </div>


      <div className='headerTopRight'>

        {user ? 
          <Link className='headerTopRightAccount buttonTier' to="/profile">profile</Link>
          :
          <Link className='headerTopRightAccount buttonTier' to="/login">login</Link>
        }
                

        {property.display_name &&  <div >
          Property: <span className='App-header-divNumber' title={property.display_name}>{property.display_name.substring(0, 9)} ...</span>
          <img className='notificationIcon' src={notificationIcon} onClick={handleClickNotification} title={`Follow ${property.display_name.substring(0, 9)} ...`}/>
        </div>
        }
            
            </div>
      </div>
  </div>
  )
}

export default Header

