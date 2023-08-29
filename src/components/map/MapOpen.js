// https://react-leaflet.js.org/docs/start-introduction/
// https://blog.logrocket.com/react-leaflet-tutorial/
// https://leafletjs.com/examples/quick-start/
// https://nominatim.openstreetmap.org/search.php?q=query&polygon_geojson=1&format=jsonv2
// https://wiki.openstreetmap.org/wiki/Map_features

import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import { MapContainer } from 'react-leaflet';

import '../../styles/map.css'

import LoadingIcon from '../global/LoadingIcon';
import MapOpenMid from './MapOpenMid';

const MapOpen = ({mapQueryData, zoom}) => {


  const navigate = useNavigate();

  const property = useSelector(state => state.property)
  const loading = useSelector(state => state.loadingFlag)
  const bounds = useSelector(state => state.bounds)
 

  // useEffect(() => {
  //   if (property.display_name)
  //   {
  //     navigate(`/property/`)
  //   }
  // }, [property, navigate])

  // center={[mapQueryData[0].lat, mapQueryData[0].lon]}
  // zoom={zoom}
  // key={`${mapQueryData[0].lat}-${mapQueryData[0].lon}-${zoom}`}

  return (
    <div className=''>
      <MapContainer className='mapItem' bounds={bounds} key={bounds} scrollWheelZoom={true} >
      
        {/* <SearchNearPoint positionCentered={positionCentered} /> */}
        
        {loading &&
          <LoadingIcon />
        }

        <MapOpenMid mapQueryData={mapQueryData} bounds={bounds} />
    
      </MapContainer>
    </div>
      
  )
}

export default MapOpen