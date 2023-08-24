
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import { setPropertyItem } from '../../reducers/propertyReducer';
import { getProjectsfromProperty } from '../../reducers/projectReducer';

import ProjectsList from './ProjectsList';

import '../../styles/project.css'

import ProjectFormGlobal from './ProjectFormGlobal';


const Projects = () => {
    
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const projects = useSelector(state => state.projects)
    const property = useSelector(state => state.property)
    
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
    }, [dispatch])


    return (
      <>
        <div className='projectsGlobal'>
          <ProjectsList items={projects} />
          <ProjectFormGlobal />
        </div>
      </>


  )

}

export default Projects