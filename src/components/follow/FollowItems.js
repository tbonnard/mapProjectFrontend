
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { checkFollow } from '../../reducers/followReducer';
import { getPropertyDetails } from '../../reducers/propertyReducer';

import '../../styles/follow.css'


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
    e.preventDefault()
    dispatch(getPropertyDetails(id))
    navigate('/property')
  }


  if (followedProperties.length === 0) {
    return  <div className='projectsList'>
    <p className='noFollowedItems'>No followed properties yet</p>
</div>
  }

  return (
    <div className='followedItems'>
      {followedProperties.map(foll => 
          <div key={foll.id} className='followedItem'>
              {foll.properties[0].name ? 
                <button className='buttonTier buttonFollowed' onClick={(e) => handleClick(e, foll.property)} title={foll.properties[0].display_name}>{foll.properties[0].name}</button> 
                :
                <button className='buttonTier buttonFollowed' onClick={(e) => handleClick(e, foll.property)} title={foll.properties[0].display_name}>{foll.properties[0].display_name}</button> 
              }
          </div>
         )
      }
    </div>
  )
}

export default FollowItems

