
import React from 'react';

import ProjectsList from './ProjectsList';

import '../../styles/project.css'

import ProjectFormGlobal from './ProjectFormGlobal';

const Projects = () => {
  
  
    return (
      <>
        <div className='projectsGlobal'>
          <ProjectsList  />
          <ProjectFormGlobal />
        </div>
      </>


  )

}

export default Projects