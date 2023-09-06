
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import '../../styles/searchForm.css'

import { getMapQueryData } from '../../reducers/mapQueryReducer';
import { setItemToSearch } from '../../reducers/searchReducer';

import cancelIcon from '../../media/remove_input.png'


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
//https://www.geoapify.com/reverse-geocoding-api

const SearchForm = () => {
    
  const dispatch = useDispatch()

  const searchItemvalue = useSelector(store => store.searchItem)

  const [placeAddress, setPlaceAddress] = useState('')

  const handleChange = (e) => {
    setPlaceAddress(e.target.value)
    dispatch(setItemToSearch(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getMapQueryData(placeAddress))
    dispatch(setItemToSearch(placeAddress))
  }

  const closeLayer = () => {
    dispatch(setItemToSearch(''))
    setPlaceAddress('')
  }

  return (
    <div className="uploadGlobalForm">
        <form onSubmit={handleSubmit} className='enterTextForm'>
          <div className='inputSearchFormCancelDiv'>
            <input id='searchFormInputTextSearchId' className="enterTextNumber" type="text" placeholder='Search for a specific place, an address, a location' value={placeAddress} onChange={(e) => handleChange(e)} required/>
            {searchItemvalue && 
              <img src={cancelIcon} className='cancelIcon' onClick={closeLayer}
                      alt='remove input content'
                      title='remove input content'/>
            }
            </div>
            <button className="buttonPrimary" type='submit'>submit</button>
        </form>
    </div>
  )
}

export default SearchForm