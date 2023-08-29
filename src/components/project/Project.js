
import React, { useEffect, useState } from 'react';

import Choices from './Choices'
import ProjectPropertyNameProfile from './ProjectPropertyNameProfile';


const Project = ({item, source=0}) => {
    
  const [date, setDate] = useState('')
  const [classProjectSource, setClassProjectSource] = useState('ProjectGlobal')

    useEffect(() => {
      const createdDate = new Date(item.created)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',  minute:'numeric',  second:'numeric' }
      const output = createdDate.toLocaleDateString("en-US", options)
      setDate(output)
      if (source===1) {
        setClassProjectSource('ProjectGlobalProfile')
      }
    },[item])


  if (!item) {
    return null
  }

  return (
    <div className={classProjectSource}>
        <div className='projectDiv'>   
            {source === 1 && <ProjectPropertyNameProfile item={item} />}
          <h2 className=''>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <Choices project={item} />
        <div className='projectDateDiv'>
          <p className='projectDate'>{date}</p>
        </div>
    </div>
  )
}

export default Project