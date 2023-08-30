
import React , { useEffect } from 'react';
import {  useDispatch } from 'react-redux'

import { getMapQueryDataSearchNearLocation } from '../../reducers/mapQueryReducer';
import { setNotification } from '../../reducers/notificationTempReducer';

import { getMapQueryDataOverpassTurbo } from '../../reducers/mapQueryReducer';


import navigationIcon from '../../media/navigation.png'


// TODO: drag & reload


const SearchTurboPass = ({map, bounds}) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        removeInputTextContent()
        const coordinates = map.getCenter()
        if (map.getZoom() >= 12) {
            const bounding = map.getBounds()
            // [out:json];nwr(51.477,-0.001,51.478,0.001);out;
            
    // 51.477 is the latitude of the southern edge.
    // -0.001 is the longitude of the western edge.
    // 51.478 is the latitude of the norther edge.
    // 0.001 is the longitude of the eastern edge.
//GET BOUNDS react leaf
// Object { _southWest: {…}, _northEast: {…} }
// _northEast: Object { lat: 43.572960314548624, lng: 4.123821258544923 }
// _southWest: Object { lat: 43.555017530651966, lng: 4.065628051757813 }

            // [bbox:south,west,north,east] -- overpass
            // nominatim =  south Latitude, north Latitude, west Longitude, east Longitude
            const bbox = `${bounding['_southWest']['lat']},${bounding['_southWest']['lng']},${bounding['_northEast']['lat']},${bounding['_northEast']['lng']}`
            const itemParameter = `[out:json];nwr(${bbox});out;`
            dispatch(getMapQueryDataOverpassTurbo(itemParameter))
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
        <div className='searchButtonMap'>
            <div className='searchTurboPassButtonDiv'>
                <img className='navigationIcon' src={navigationIcon}/>
                <button className='searchNearButton' onClick={handleClick}>or search for any places</button>
            </div>
        </div>
        )
    }

export default SearchTurboPass