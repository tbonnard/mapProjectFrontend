
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { checkFollow } from '../../reducers/followReducer';
import { getPropertyDetails } from '../../reducers/propertyReducer';

import '../../styles/header.css'



const FollowItems = () => {
    
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const user = useSelector(state => state.user)
  const followedProperties = useSelector(state => state.followedProperties)


  useEffect(() => {
    if (user) {
      dispatch(checkFollow({follower:user.id }))
    }
  },[user, dispatch])

  
  const handleClick = (e, id) => {
    console.log(id)
    e.preventDefault()
    dispatch(getPropertyDetails(id))
    navigate('/property')
  }


  if (followedProperties.length === 0) {
    return null
  }

  return (
    <div >
      <h3>properties followed</h3>
      {followedProperties.map(foll => 
          <div key={foll.id}>
              {foll.properties[0].name ? 
                <button onClick={(e) => handleClick(e, foll.property)}>{foll.properties[0].name}</button> 
                :
                <button onClick={(e) => handleClick(e, foll.property)}>{foll.properties[0].display_name}</button> 
              }
          </div>
         )
      }
    </div>
  )
}

export default FollowItems

