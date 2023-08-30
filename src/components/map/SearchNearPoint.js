
import React , { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux'

import { getMapQueryDataUserLocation } from '../../reducers/mapQueryReducer';
import { setNotification } from '../../reducers/notificationTempReducer';


import navigationIcon from '../../media/navigation.png'


// TODO: drag & reload


const SearchNearPoint = ({map, bounds}) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        removeInputTextContent()
        const coordinates = map.getCenter()
        if (map.getZoom() >= 12) {
            const itemObject = {latitude:coordinates['lat'], longitude:coordinates['lng']}
            dispatch(getMapQueryDataUserLocation(itemObject))
        } else {
            dispatch(setNotification({message:'Please zoom in to search within a 10km radius', style:'warning', time:5000}))
        }
     }

    const removeInputTextContent = () => {
        if (document.querySelector('#searchFormInputTextSearchId'))
        {
            let inputTextToReset = document.querySelector('#searchFormInputTextSearchId')
            inputTextToReset.value=''
        }
    } 


    useEffect(() => {
    map.fitBounds(bounds);
  }, [map, bounds]);

    return (
        <div className='searchNearButtonMap'>
            <div className='searchNearButtonDiv'>
                <img className='navigationIcon' src={navigationIcon}/>
                <button className='searchNearButton' onClick={handleClick}>or search for any nearby places with suggestions</button>
            </div>
        </div>
        )
    }

export default SearchNearPoint