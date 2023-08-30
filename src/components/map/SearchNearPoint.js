
import React , { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux'

import { getMapQueryDataUserLocation } from '../../reducers/mapQueryReducer';
import { setNotification } from '../../reducers/notificationTempReducer';


import navigationIcon from '../../media/navigation.png'

// TODO: search near based on zoom and zoom level = km specific
// TODO: Search in specific area with coordinates- https://overpass-turbo.eu/


const SearchNearPoint = ({map, bounds}) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        const coordinates = map.getCenter()
        if (map.getZoom() >= 12) {
            const itemObject = {latitude:coordinates['lat'], longitude:coordinates['lng']}
            dispatch(getMapQueryDataUserLocation(itemObject))
        } else {
            dispatch(setNotification({message:'Please zoom in to search within a 10km radius', style:'warning', time:5000}))
        }
     }

    useEffect(() => {
    map.fitBounds(bounds);
  }, [map, bounds]);

    return (
        <div className='searchNearButtonMap'>
            <div className='searchNearButtonDiv'>
                <img className='navigationIcon' src={navigationIcon}/>
                <button className='searchNearButton' onClick={handleClick}>search in places with suggestions nearby</button>
            </div>
        </div>
        )
    }

export default SearchNearPoint