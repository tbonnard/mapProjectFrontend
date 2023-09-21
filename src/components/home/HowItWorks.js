
import React from 'react';

import { useNavigate } from 'react-router-dom';

import searchIcon from '../../media/search.png'
import voteIcon from '../../media/vote.png'
import locationIcon from '../../media/location.png'
import ideaIcon from '../../media/idea.png'
import downIcon from '../../media/down.png'


import '../../styles/howItWorks.css'

import Menu from '../global/Menu';
import WhySmall from './WhySmall';


const HowItWorks = () => {

  const navigate = useNavigate();

  
    const handleHome = () => {
      navigate('/')
  }
 
  return (
    <div className='standardContainer' id='howItWorks'>
      <Menu />
      <div className='standardDiv'>
        <h3 className='descriptionTextItem'>HOW IT WORKS</h3>
        <div className='descriptionDivFlex'>
            <div className='descriptionTextItem'>
              <img src={searchIcon} className='imageHowITWorks' />
                <p>enter a place or an address</p>
            </div>
            <div className='descriptionTextItem'>
              <img src={locationIcon} className='imageHowITWorks' />
              <p>Select the location</p>
            </div>
            <div className='descriptionTextItem'>
              <img src={ideaIcon} className='imageHowITWorks' />
              <p>propose a suggestion or improvement</p>
            </div>
            <div className='descriptionTextItem'>
              <img src={voteIcon} className='imageHowITWorks' />
              <p>vote for a suggestion or improvement</p>
            </div>
          </div>

          <div className='descriptionDivFlex whySmall'>
            <img src={downIcon} className='imageHowITWorks' />
            <WhySmall />
          </div>

          <div className='whyButtonDiv'>
            <button className='buttonPrimary buttonPrimaryCompleteBorder' onClick={handleHome}>try!</button>
          </div>
    

        </div>
    </div>
  )
}

export default HowItWorks