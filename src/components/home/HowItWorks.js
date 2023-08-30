
import React from 'react';

import searchIcon from '../../media/search.png'
import voteIcon from '../../media/vote.png'
import locationIcon from '../../media/location.png'

import '../../styles/howItWorks.css'
import Menu from '../global/Menu';


const HowItWorks = () => {
    
  return (
    <div className='standardContainer' id='howItWorks'>
      <Menu />
      <div className='standardDiv'>
        <h3 className='descriptionText '>HOW IT WORKS</h3>
        <div className='descriptionDivFlex'>
            <div className='descriptionText'>
              <img src={searchIcon} className='imageHowITWorks' />
                <p>enter a place or an address</p>
            </div>
            <div className='descriptionText'>
              <img src={locationIcon} className='imageHowITWorks' />
              <p>Select the location</p>
            </div>
            <div className='descriptionText'>
              <img src={voteIcon} className='imageHowITWorks' />
              <p>propose a suggestion or improvement / vote for a suggestion or improvement</p>
            </div>
            </div>
          </div>
      </div>
  )
}

export default HowItWorks