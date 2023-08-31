
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import '../../styles/choices.css'

import ChoicesStandard from './ChoicesStandard';
import ChoicesWithVotes from './ChoicesWithVotes';

// TODO: add chart or info on % des votes (bar sous choice couleur diff et montent based on %)
// indicateurs -->
// - un indicateur de contestation (= si les votes sont unanimes ou si c'est partagé)
// - et un indicateur temporel (= si c'est du vieux topic, plus actif, ca laisse la prio aux trucs frais) 
// (Au moins info en back-end si c'est pas direct via la UI)


const Choices = ({project}) => {
    
  const user = useSelector(state => state.user)
  const voteUserProperty = useSelector(state => state.voteUserProperty)

  const [votesProjUser, setVotesProjUser] = useState([])
  
  useEffect(() => {
    setVotesProjUser(voteUserProperty.filter(item => item.project ===project.id ))
  }, [project, voteUserProperty, user])

  return (
      <div className='choicesGlobal'>
        {votesProjUser.length > 0 ? 
          <ChoicesWithVotes user={user} project={project} votesProjUser={votesProjUser} />
        :
          <ChoicesStandard user={user} project={project} />
        }
        
    </div>
  )
}

export default Choices