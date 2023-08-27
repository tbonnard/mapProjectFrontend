
import React from 'react';


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