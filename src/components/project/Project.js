
import React, { useEffect, useState } from 'react';

import Choices from './Choices'

const Project = ({item}) => {
    
  const [date, setDate] = useState('')

    useEffect(() => {
      const createdDate = new Date(item.created)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',  minute:'numeric',  second:'numeric' }
      const output = createdDate.toLocaleDateString("en-US", options)
      setDate(output)
    },[item])


  if (!item) {
    return null
  }

  return (
    <div className='ProjectGlobal'>
        <div className=''>
          <h2 className=''>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <Choices />
        <div className='projectDateDiv'>
          <p className='projectDate'>{date}</p>
        </div>
    </div>
  )
}

export default Project