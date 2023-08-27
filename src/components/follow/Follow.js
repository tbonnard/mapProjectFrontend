
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { setNotification } from '../../reducers/notificationTempReducer'
import { addFollow, removeFollow, checkFollow } from '../../reducers/followReducer';

import '../../styles/header.css'

import notificationIcon from '../../media/notification.png'
import unfollowIcon from '../../media/unfollow.png'

const Follow = () => {
    
  const dispatch = useDispatch()

  const property = useSelector(state => state.property)
  const user = useSelector(state => state.user)
  const followedProperties = useSelector(state => state.followedProperties)
  
  const [propertyFollowed, setPropertyFollowed] = useState({})
  const [propertyFollowedFlag, setPropertyFollowedFlag] = useState(false)


  useEffect(() => {
    let count = 0
    for (const i in followedProperties) {
      if (followedProperties[i].property === property.id) {
        count = count + 1
        setPropertyFollowed(followedProperties[i])
      } 
    } 
    if (count > 0) {
      setPropertyFollowedFlag(true)
    } 
    else {
      setPropertyFollowedFlag(false)
    }
  },[property, followedProperties])


  useEffect(() => {
    if (user) {
      dispatch(checkFollow({follower:user.id }))
    }
  },[user, dispatch])



  const handleClickFollow = () => {        
    dispatch(addFollow({follower:user.id, property:property}))
    dispatch(setNotification({message:'property followed', style:'success', time:4000}))
  }

  const handleClickUnfollow = () => {
    dispatch(removeFollow(propertyFollowed.id))
    dispatch(setNotification({message:'property unfollowed', style:'success', time:4000}))
  }

  const handleSetNotifNotLoggedIn = () => {
    dispatch(setNotification({message:'you must be logged in to follow that place and see new suggestions', style:'warning', time:4000}))
  }

  return (
    <div >

      {!user ?  
        <img className='notificationIcon' src={notificationIcon} onClick={handleSetNotifNotLoggedIn} title={`Follow ${property.display_name}`}/>
        :     
        <div>
          { propertyFollowedFlag ? 
            <img className='notificationIcon' src={unfollowIcon} onClick={handleClickUnfollow} title={`Unfollow ${property.display_name}`}/>
            : 
            <img className='notificationIcon' src={notificationIcon} onClick={handleClickFollow} title={`Follow ${property.display_name}`}/>
            }
        </div>
      }
      
    </div>
  )
}

export default Follow

