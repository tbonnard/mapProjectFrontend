
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import '../../styles/choices.css'

import { setNotification } from '../../reducers/notificationTempReducer';
import { addVoteUserProperty } from '../../reducers/voteUserPropertyProjectReducer';
import { removeVoteUserProperty } from '../../reducers/voteUserPropertyProjectReducer';
import Choice from './Choice';


// TODO: add chart or info on % des votes (bar sous choice couleur diff et montent based on %)
// TODO: indicateurs
// - un indicateur de contestation (= si les votes sont unanimes ou si c'est partagé)
// - et un indicateur temporel (= si c'est du vieux topic, plus actif, ca laisse la prio aux trucs frais) 
// (Au moins info en back-end si c'est pas direct via la UI)


const Choices = ({project}) => {
    
  const dispatch = useDispatch()

  const choices = useSelector(state => state.choices)
  const user = useSelector(state => state.user)
  const voteUserProperty = useSelector(state => state.voteUserProperty)

  const [votesProjUser, setVotesProjUser] = useState([])
  
  useEffect(() => {
    setVotesProjUser(voteUserProperty.filter(item => item.project ===project.id ))
  },[project, voteUserProperty])


  const handleClick = (e) => {
    e.preventDefault()
    if (!user) {
      dispatch(setNotification({message:'you must be logged in to vote', style:'warning', time:4000}))
    } else {
        const itemVoted = {'voter':user.id, 'project':project.id, 'property':project.property, 'value':parseInt(e.target.getAttribute("data-value"))}
        
        if (votesProjUser.length > 0) {
   
              if (votesProjUser[0].value === parseInt(e.target.getAttribute("data-value")))
              {
                dispatch(removeVoteUserProperty(votesProjUser[0].id))
                // dispatch(setNotification({message:'vote already taking into account', style:'warning', time:4000}))
              } 
              else {
                dispatch(removeVoteUserProperty(votesProjUser[0].id))
                dispatch(addVoteUserProperty(itemVoted))
              }  
        } 
        else {
            dispatch(addVoteUserProperty(itemVoted))
          }      
    }  
  }



  return (
      <div className='choicesGlobal'>        
        {choices.map(item => <Choice key={item.id} choiceItem={item} handleClick={handleClick} votesProjUser={votesProjUser}/>)} 
        
    </div>
  )
}

export default Choices