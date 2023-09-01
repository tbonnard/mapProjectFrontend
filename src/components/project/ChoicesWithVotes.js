
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

import '../../styles/choices.css'

import { addVoteAllPropertyFollowed, removeVoteAllPropertyFollowed} from '../../reducers/voteAllPropertiesFollowedReducer'


const ChoicesWithVotes = ({votesProjUser, project, user}) => {
    
  const dispatch = useDispatch()

  const [classVoteYes1, setclassVoteYes1] = useState('voteIconAllDefault voteYesIcon')
  const [classVoteNo2, setclassVoteNo2] = useState('voteIconAllDefault voteNoIcon')
  const [classVoteWhatever3, setclassVoteWhatever3] = useState('voteIconAllDefault voteWhateverIcon')

  const handleClick = (e) => {
      e.preventDefault()
      const itemVoted = {'voter':user.id, 'project':project.id, 'property':project.property, 'value':parseInt(e.target.getAttribute('data-value-option'))}
      if (votesProjUser[0].value === parseInt(e.target.getAttribute('data-value-option'))) {
        dispatch(removeVoteAllPropertyFollowed(votesProjUser[0].id))
      } else {
        dispatch(removeVoteAllPropertyFollowed(votesProjUser[0].id))
        dispatch(addVoteAllPropertyFollowed(itemVoted))
        }   
  }

  useEffect(() => {
    if (votesProjUser[0].value ===1 ) {
      setclassVoteYes1('voteIconAllDefault voteYesIconSelected')
      setclassVoteNo2('voteIconAllDefault voteNoIcon')
      setclassVoteWhatever3('voteIconAllDefault voteWhateverIcon')
    } else if (votesProjUser[0].value === 2 ) {
      setclassVoteYes1('voteIconAllDefault voteYesIcon')
      setclassVoteNo2('voteIconAllDefault voteNoIconSelected')
      setclassVoteWhatever3('voteIconAllDefault voteWhateverIcon')
    } else {
      setclassVoteYes1('voteIconAllDefault voteYesIcon')
      setclassVoteNo2('voteIconAllDefault voteNoIcon')
      setclassVoteWhatever3('voteIconAllDefault voteWhateverIconSelected')
    } 
  },[votesProjUser])

  return (
      <>
        <div className='voteIconsDiv'>
          <div className={classVoteYes1}
           data-value-option={1} onClick={handleClick} title='Vote "Yes" for that suggestion'></div>
        </div>

        <div className='voteIconsDiv'>
           <div className={classVoteNo2} data-value-option={2} onClick={handleClick} title='Vote "No" for that suggestion'></div>
        </div>

        <div className='voteIconsDiv'>
          <div className={classVoteWhatever3} data-value-option={3} onClick={handleClick} title='Vote "not relevant for me" for that suggestion'></div>
        </div>
    </>
  )
}

export default ChoicesWithVotes