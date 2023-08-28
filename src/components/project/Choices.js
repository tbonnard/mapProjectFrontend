
import React from 'react';
import { useSelector } from 'react-redux'

import '../../styles/choices.css'


const Choices = ({project}) => {
    
  const choices = useSelector(state => state.choices)

  const handleClick = (e) => {
    e.preventDefault()
    const voteAnswered = e.target.getAttribute("data-value")
  }

  return (
      <div className='choicesGlobal'>
            {choices.map(item => <button data-value={item.id} onClick={(e) => handleClick(e)} key={item.id} className='buttonChoices'>{item.description}</button> )}
    </div>
  )
}

export default Choices