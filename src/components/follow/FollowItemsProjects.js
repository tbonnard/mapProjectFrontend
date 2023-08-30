
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Project from '../project/Project';

import { followPropertiesGetProjects } from '../../reducers/followPropertiesGetProjectsReducer';
import {checkUserVotesAllPropertiesFollowed } from '../../reducers/voteUserPropertyProjectReducer'

import '../../styles/follow.css'


const FollowItemsProjects = () => {
    
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const followUserPropertyProjects = useSelector(state => state.followPropertiesGetProjects)
  
  useEffect(() => {
    if (user) {
      dispatch(followPropertiesGetProjects({user:user.id }))
      dispatch(checkUserVotesAllPropertiesFollowed({user:user.id }))
    }
  },[user, dispatch])

  
  if (followUserPropertyProjects.length === 0) {
    return  <div className='projectsList'>
      <p className='noFollowedItems'>No suggestions related to your followed properties yet. {!user && 'Login to start following places!'}</p>
  </div>
  }

  return (
    <div className='projectsList'>
      {followUserPropertyProjects.map((proj, ind) => <Project key={proj.id} item={proj} source={1}/> )}
    </div>
  )

}

export default FollowItemsProjects

