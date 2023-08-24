
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux'

import '../../styles/intro.css'

import SearchForm from './SearchForm';

const Intro = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
      window.scrollTo({left: 0, top:0,  behavior: "smooth"});
}, [dispatch])

  return (
    <>
    <div className='intro'>
      <div className='introDiv'>
        <div className='descriptionText'>
            Introducing [appName]: <br/>
            local suggestions and improvement
        </div>
        <div className='descriptionText'>
        [appName] is an easy tool to propose suggestions and 
        improve your neighbourood and your favorite places
        </div>
        <SearchForm />
      </div>
      <div className='backimg'></div>
    </div> 
   </>
  )
}

export default Intro