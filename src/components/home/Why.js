
import React from 'react';

import searchIcon from '../../media/search.png'
import voteIcon from '../../media/vote.png'
import locationIcon from '../../media/location.png'

import '../../styles/howItWorks.css'
import Menu from '../global/Menu';
import WhySmall from './WhySmall';

const Why = () => {
    
  return (
    <div className='standardContainer' id='why'>
      <Menu />
      <div className='standardDiv'>
        <h3 className='descriptionTextItem'>WHY?</h3>
          <WhySmall />
        </div>
      </div>
  )
}

export default Why