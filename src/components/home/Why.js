
import React from 'react';

import searchIcon from '../../media/search.png'
import voteIcon from '../../media/vote.png'
import locationIcon from '../../media/location.png'

import '../../styles/howItWorks.css'
import Menu from '../global/Menu';


const Why = () => {
    
  return (
    <div className='standardContainer' id='howItWorks'>
      <Menu />
      <div className='standardDiv'>
        <h3 className='descriptionText '>WHY?</h3>
        <div className='whyDiv'>
            <div className='descriptionText'>
                <p>citizen initiative</p>
            </div>
            <div className='descriptionText'>
              <p>have a voice</p>
            </div>
            <div className='descriptionText'>
              <p>let owner of a place knows what to improve</p>
            </div>
            <div className='descriptionText'>
              <p>better priorization for places' owners</p>
            </div>
            </div>
          </div>
      </div>
  )
}

export default Why