
import React from 'react';

import Project from './Project'

const ProjectsList = ({items}) => {
    
  if (items.length === 0) {
    return (
        <div className='projectsList'>
            <p className='infoText'>no suggestion yet</p>
        </div>
    )
}

  return (
    <div className='projectsList'>
        {items.map((proj, ind) => <Project key={proj.id} item={proj} /> )}
  </div>
  )
}

export default ProjectsList