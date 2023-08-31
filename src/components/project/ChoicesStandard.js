
import React from 'react';
import { useDispatch } from 'react-redux'

import '../../styles/choices.css'

import { addVoteUserProperty } from '../../reducers/voteUserPropertyProjectReducer';
import { setNotification } from '../../reducers/notificationTempReducer';


const ChoicesStandard = ({project, user}) => {
    
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    if (!user) {
      dispatch(setNotification({message:'you must be logged in to vote', style:'warning', time:4000}))
    } else {
      const itemVoted = {'voter':user.id, 'project':project.id, 'property':project.property, 'value':parseInt(e.target.getAttribute('data-value-option'))}
      dispatch(addVoteUserProperty(itemVoted))
    }

  }

  return (
      <>
        <div className='voteIconsDiv'>
          <div className='voteIconAllDefault voteYesIcon'
           data-value-option={1} onClick={handleClick} title='Vote "Yes" for that suggestion'></div>
        </div>

        <div className='voteIconsDiv'>
           <div className='voteIconAllDefault voteNoIcon' data-value-option={2} onClick={handleClick} title='Vote "No" for that suggestion'></div>
        </div>

        <div className='voteIconsDiv'>
          <div className='voteIconAllDefault voteWhateverIcon' data-value-option={3} onClick={handleClick} title='Vote "not relevant for me" for that suggestion'></div>
        </div>
    </>
  )
}

export default ChoicesStandard