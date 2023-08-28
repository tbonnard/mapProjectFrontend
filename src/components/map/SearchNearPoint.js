
import React from 'react';
import {  useDispatch } from 'react-redux'

import { getMapQueryDataUserLocation } from '../../reducers/mapQueryReducer';
import { setNotification } from '../../reducers/notificationTempReducer';


// TODO: search near based on zoom and zoom level = km specific

const SearchNearPoint = ({map, positionCentered}) => {
    
    const dispatch = useDispatch()
        
    const handleClick = () => {
        if (map.getZoom() >= 12) {
            const itemObject = {latitude:positionCentered['lat'], longitude:positionCentered['lng']}
            dispatch(getMapQueryDataUserLocation(itemObject))
        } else {
            dispatch(setNotification({message:'Please zoom in to search within a 10km radius', style:'warning', time:5000}))
        }

     }

    return (
        <button className='searchNearButton' onClick={handleClick}>serch near here for suggestions</button>
        )
    }

export default SearchNearPoint