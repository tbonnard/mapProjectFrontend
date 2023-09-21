
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Project from '../project/Project';

import { followPropertiesGetProjects } from '../../reducers/followPropertiesGetProjectsReducer';
import {checkUserVotesAllPropertiesFollowed } from '../../reducers/voteAllPropertiesFollowedReducer'
import { getNearbyProjectsfromProperties } from '../../reducers/allProjectsNearbyPropertiesReducer';

import '../../styles/follow.css'


const FollowItemsProjects = () => {
    
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const followUserPropertyProjects = useSelector(state => state.followPropertiesGetProjects)
  const allPropertyProjects = useSelector(state => state.allProjectsNearbyProperties)
  const propertiesCurrentRoot =  useSelector(state => state.mapQuery)


  const [itemTabFollowed, setItemTab] = useState(false)

  const handleTabButton = () => {
      setItemTab(!itemTabFollowed)
  }

  useEffect(() => {
    if (propertiesCurrentRoot.length > 0) {
      let propertiesCurrentDB = []
      for (const i in propertiesCurrentRoot) {
        if (propertiesCurrentRoot[i].id) {
          propertiesCurrentDB.push(propertiesCurrentRoot[i])
        }
      }
      dispatch(getNearbyProjectsfromProperties(propertiesCurrentDB))
      console.log(propertiesCurrentDB)
    }
  },[propertiesCurrentRoot, dispatch])



  useEffect(() => {
    if (user) {
      dispatch(followPropertiesGetProjects({user:user.id }))
      dispatch(checkUserVotesAllPropertiesFollowed({user:user.id }))
    }
  },[user, dispatch])

  
  // if (followUserPropertyProjects.length === 0) {
  //   return  <div className='projectsList'>
  //     <p className='noFollowedItems'>No suggestions related to your followed properties yet. {!user && 'Login to start following places!'}</p>
  // </div>
  // }

  return (
    <div className='projectsList'>

      <div className='buttonTabFollowedItems'>
          <button className={!itemTabFollowed ? 'buttonTier greenColor' : 'buttonTier MainColor'} onClick={handleTabButton}>Nearby</button>
          <button className={itemTabFollowed ? 'buttonTier greenColor' : 'buttonTier MainColor'} onClick={handleTabButton}>Followed</button>
      </div>
      
      {
        itemTabFollowed ? 
        <>
        {followUserPropertyProjects.length === 0 ? 
        <div className='projectsList'>
          <p className='noFollowedItems'>No suggestions related to your followed properties yet. Add a new one! {!user && 'Login to start following places!'}</p>
        </div> 
        :
        <>
          {followUserPropertyProjects.map((proj, ind) => <Project key={proj.id} item={proj} source={1}/> )}
        </>
        }
        </>
        :
        <>
        {allPropertyProjects.length === 0 ? 
        <div className='projectsList'>
          <p className='noFollowedItems'>No suggestions yet with those criteria. Search with other parameters or add a new one! {!user && 'Login to add suggestions!'}</p>
        </div> 
        :
        <>
          {allPropertyProjects.map((proj, ind) => <Project key={proj.id} item={proj} source={1}/> )}
        </>
        }


        </>
      }


    </div>
  )

}

export default FollowItemsProjects

