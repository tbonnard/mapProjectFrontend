
import React, { useState } from 'react';


import FollowItems from './FollowItems';
import FollowItemsProjects from './FollowItemsProjects';
import AccountDetails from '../login/AccountDetails';

import '../../styles/follow.css'


const FollowGlobal = () => {
  
  const [tab, setTab] = useState(1)
  const [classnameSet1, setClassnameSet1] = useState('tabTitle tabSelected')
  const [classnameSet2, setClassnameSet2] = useState('tabTitle')
  const [classnameSet3, setClassnameSet3] = useState('tabTitle')

  const handleClick1 = () => {
    setClassnameSet1('tabTitle tabSelected')
    setClassnameSet2('tabTitle')
    setClassnameSet3('tabTitle')
    setTab(1)
  }

  const handleClick2 = () => {
    setClassnameSet1('tabTitle')
    setClassnameSet2('tabTitle tabSelected')
    setClassnameSet3('tabTitle')
    setTab(2)
  }

  
  const handleClick3 = () => {
    setClassnameSet1('tabTitle')
    setClassnameSet2('tabTitle')
    setClassnameSet3('tabTitle tabSelected')
    setTab(3)
  }


  return (
    <>
      <div className='tabs'>
        <div className='tab'>
          <h3 onClick={handleClick1} className={classnameSet1}>Feeds</h3>
        </div>
        <div className='tab'>
          <h3 onClick={handleClick2} className={classnameSet2}>Properties followed</h3>
        </div>
        <div className='tab'>
          <h3 onClick={handleClick3} className={classnameSet3}>Account</h3>
        </div>
      </div>

        <div className='tabItems'>
        {tab === 1 &&
          <FollowItemsProjects />
        } 

        {tab === 2 &&
          <FollowItems />
        } 

        {tab === 3 &&
          <AccountDetails />
        } 
        </div>
    </>
  )
}

export default FollowGlobal

