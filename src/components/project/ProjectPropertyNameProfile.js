
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import { setPropertyItem } from '../../reducers/propertyReducer';
import { getProjectsfromProperty } from '../../reducers/projectReducer';


import Choices from './Choices'


const ProjectPropertyNameProfile = ({item}) => {
    
  const dispatch = useDispatch()
  const navigate = useNavigate();

    const handleClickProperty = () => {
      dispatch(setPropertyItem(item.properties[0]))
      window.scrollTo(0,0)
      navigate('/property')
    }

  return (
    <div>
      {item['properties'][0].name
       ? 
      <button onClick={handleClickProperty} className='propertyTitleProfile' title={item['properties'][0].display_name}>{item['properties'][0].name}</button>
      :
      <button onClick={handleClickProperty} className='propertyTitleProfile' title={item['properties'][0].display_name}>{item['properties'][0].display_name.substring(0, 9)}...</button>
      }

    </div>
  )
}

export default ProjectPropertyNameProfile