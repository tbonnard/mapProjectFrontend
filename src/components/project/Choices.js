
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import '../../styles/choices.css'


const Choices = () => {
    
  const choices = useSelector(state => state.choices)

  return (
      <div className='choicesGlobal'>
            {choices.map((item, index) => <button key={item.id} className='buttonChoices'>{item.description}</button> )}
    </div>
  )
}

export default Choices