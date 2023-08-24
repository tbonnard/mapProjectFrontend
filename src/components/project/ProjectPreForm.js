
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import addIcon from '../../media/add.png'

const ProjectPreForm = ({setFlagCreateProject}) => {
    
    
    const handleClick = (e) => {
        e.preventDefault()
        setFlagCreateProject(true)
    }


  return (
        <div className='projectPreDiv'>
            <div className='projectAddIcon' onClick={handleClick} title='Add a new suggestion or improvement'></div>
        </div>
  )
}

export default ProjectPreForm