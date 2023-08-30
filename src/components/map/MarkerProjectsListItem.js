
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { checkVotesProperty } from '../../reducers/votePropertyProjectReducer';
import { checkVotesUserProperty } from '../../reducers/voteUserPropertyProjectReducer';

import Choices from './../project/Choices'

const MarkerProjectsListItem = ({project}) => {
    
    const dispatch = useDispatch()

    const user = useSelector(store => store.user)
    
    useEffect(() => {
        if (project.property) {
            dispatch(checkVotesProperty(project.property))
          }
          if (user && project.property) {
            dispatch(checkVotesUserProperty({'property':project.property, 'voter': user.id}))
          }
    },[project, user, dispatch]
    
    )
    return (
        <div className='markerProjectDivItem'>
            <p>{project.title}</p>
            <Choices project={project}/>
        </div>      
      )
}

export default MarkerProjectsListItem