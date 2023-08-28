
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'

import { resetProjects } from '../../reducers/projectReducer';
import { resetProperty } from '../../reducers/propertyReducer';

import '../../styles/header.css'

import Follow from '../follow/Follow';


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
    dispatch(resetProperty())
    dispatch(resetProjects())
    window.scrollTo(0,0);
    // if (window.location.pathname === '/')
    // {
    // window.location.reload(false);
    // }
  }


  return (
    <div className={classHeader}>

      { process.env.NODE_ENV === 'production' ? <p className='textInfoProdIinfo'>en cours de dev :)</p>: <></> }
      
      <div className='App-header'>

        <div className='App-header-divLogo'>
          <Link className='' to="/" onClick={handleClick}>[appName]</Link>
        </div>

        {property.display_name  &&  

        <div className='headerPropertyDetails' >
          
            <div>
              {property.name === null? 
            <p className='headerPropertyName' title={property.display_name}>{property.display_name.substring(0, 9)} ...</p>
                :           
            <p className='headerPropertyName' title={property.display_name}>{property.name}</p>
            }
            </div>
          
        
            <Follow />
          

          </div> }
     

          {user ? 
              <Link className='headerTopRightAccount buttonTier' to="/profile">profile</Link>
              :
              <Link className='headerTopRightAccount buttonTier' to="/login">login</Link>
            }

      </div>
  </div>
  )
}

export default Header

