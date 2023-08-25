
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import '../../styles/searchForm.css'

import { getMapQueryData } from '../../reducers/mapQueryReducer';

const SearchForm = ({setLoading}) => {
    
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const [placeAddress, setPlaceAddress] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    dispatch(getMapQueryData(placeAddress))
    window.scrollTo({left: 0, top:document.querySelector('#map').offsetTop,  behavior: "smooth"});
  }


  const handleHowItWorks = () => {
    window.scrollTo({left: 0, top:document.querySelector('#howItWorks').offsetTop,  behavior: "smooth"});
  }


  return (
    <div className="uploadGlobalForm">
        <form onSubmit={handleSubmit} className='enterTextForm'>
            <input className="enterTextNumber" type="text" placeholder='Enter a place, an address' value={placeAddress} onChange={(e) => setPlaceAddress(e.target.value)} required/>
            <button className="buttonPrimary" type='submit'>submit</button>
        </form>
        
        <div className='formUploadButtons'>
            <button className='buttonTier' onClick={handleHowItWorks}>see how it works</button>
        </div>
    </div>

  )
}

export default SearchForm