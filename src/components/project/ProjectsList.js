
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import Project from './Project'

import { setPropertyItem } from '../../reducers/propertyReducer';
import { getProjectsfromProperty } from '../../reducers/projectReducer';
import { checkVotesProperty } from '../../reducers/votePropProjReducer';
import { checkVotesUserProperty } from '../../reducers/voteUserPropertyReducer';

const ProjectsList = () => {
        
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const projects = useSelector(state => state.projects)
  const property = useSelector(state => state.property)
  const user = useSelector(store => store.user)

    useEffect(() => {
      if (property.length > 0) {
        dispatch(getProjectsfromProperty(property))
      } else if (localStorage.getItem('propertyProjectApp')) {
          const propertyLocal = JSON.parse(localStorage.getItem('propertyProjectApp'));
          dispatch(setPropertyItem(propertyLocal))
          dispatch(getProjectsfromProperty(propertyLocal))
        } else {
          navigate(`/`)
        }
    }, [dispatch, navigate])


    useEffect(() =>{
      if (projects.length > 0) {
        if (property.id) {
          dispatch(checkVotesProperty(property.id))
        }
        if (user && property.id) {
          dispatch(checkVotesUserProperty({'property':property.id, 'voter': user.id}))
        }
      }

    },[dispatch, projects, property, user])


  
  if (projects.length === 0) {
    return (
        <div className='projectsList'>
            <p className='infoText'>no suggestion yet</p>
        </div>
    )
}

  return (
    <div className='projectsList'>
        {projects.map((proj, ind) => <Project key={proj.id} item={proj} /> )}
  </div>
  )
}

export default ProjectsList