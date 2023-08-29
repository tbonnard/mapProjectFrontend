
import React from 'react';

import '../../styles/choices.css'

const Choice = ({choiceItem, handleClick, votesProjUser}) => {
    
  if (votesProjUser.length === 0) {

    return <div className=''>
            <button data-value={choiceItem.id} onClick={(e) => handleClick(e)} key={choiceItem.id} className='buttonChoices'>{choiceItem.description}</button>
        </div>
  }
 
  return (
      <div className=''>

        {votesProjUser[0].value === choiceItem.id ? 
          <button data-value={choiceItem.id} onClick={(e) => handleClick(e)} key={choiceItem.id + choiceItem.id} className='buttonChoices buttonChoicesSelected'>{choiceItem.description}</button>
          :
          <button data-value={choiceItem.id} onClick={(e) => handleClick(e)} key={choiceItem.id} className='buttonChoices'>{choiceItem.description}</button>
        }
     
    </div>
  )
}

export default Choice