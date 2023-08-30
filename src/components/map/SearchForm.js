
import React, { useState } from 'react';

import { useDispatch } from 'react-redux'

import '../../styles/searchForm.css'

import { getMapQueryData } from '../../reducers/mapQueryReducer';
import { setLoading } from '../../reducers/loadingReducer';


//TODO: search optim based on center / zoom
// voir toutes les lieux possibles de Open street map dans un radius de x
// search near based on zoom and zoom level = km specific
// Search in specific area with coordinates- https://overpass-turbo.eu/
// data=(way (around:5000,50.10707,8.76040);); out center;
// if center has changed, search near new center point
// Search based on zoom center & si no result search plus glibal
// button reload here
//https://nominatim.org/release-docs/latest/api/Lookup/
// 1 : "user recherche un lieu specifique" . 
// 2 : "user veut voir tout ce qu'il y a avec suggestions deja". 
// 3 : "user veut voir toutes les lieux possibles de Open street map dans un radius de x"

const SearchForm = () => {
    
  const dispatch = useDispatch()

  const [placeAddress, setPlaceAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    dispatch(getMapQueryData(placeAddress))
  }

  return (
    <div className="uploadGlobalForm">
        <form onSubmit={handleSubmit} className='enterTextForm'>
            <input id='searchFormInputTextSearchId' className="enterTextNumber" type="text" placeholder='Search for a specific place, an address, a location' value={placeAddress} onChange={(e) => setPlaceAddress(e.target.value)} required/>
            <button className="buttonPrimary" type='submit'>submit</button>
        </form>
    </div>

  )
}

export default SearchForm