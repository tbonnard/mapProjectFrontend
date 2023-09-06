
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import '../../styles/searchForm.css'

import { getMapQueryData } from '../../reducers/mapQueryReducer';
import { setItemToSearch } from '../../reducers/searchReducer';

import cancelIcon from '../../media/remove_input.png'

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