// https://react-leaflet.js.org/docs/start-introduction/
// https://blog.logrocket.com/react-leaflet-tutorial/
// https://leafletjs.com/examples/quick-start/
// https://nominatim.openstreetmap.org/search.php?q=query&polygon_geojson=1&format=jsonv2
// https://wiki.openstreetmap.org/wiki/Map_features


import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import { MapContainer, TileLayer } from 'react-leaflet';

import '../../styles/map.css'

import SearchNearPoint from './SearchNearPoint';

import LoadingIcon from '../global/LoadingIcon';
import MapMarker from './MapMarker';

const MapOpen = ({mapQueryData, zoom}) => {


  const navigate = useNavigate();

  const property = useSelector(state => state.property)
  const loading = useSelector(state => state.loadingFlag)
  const bounds = useSelector(state => state.bounds)
 
  const [positionCentered, setPositionCentered] = useState([])

  useEffect(() => {
    if (property.display_name)
    {
      navigate(`/property/`)
    }
  }, [property, navigate])

  // center={[mapQueryData[0].lat, mapQueryData[0].lon]}
  // zoom={zoom}
  // key={`${mapQueryData[0].lat}-${mapQueryData[0].lon}-${zoom}`}

  return (
    <div className=''>
      <MapContainer className='mapItem'  bounds={bounds} key={bounds} scrollWheelZoom={true} >
      
      <SearchNearPoint positionCentered={positionCentered} />
      
      {loading &&
        <LoadingIcon />
      }
    
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    
         {mapQueryData.map((map, index) => {
            const position = [map['lat'], map['lon']];
                return (
                  <MapMarker key={index} markerData={map} bounds={bounds} setPositionCentered={setPositionCentered}/>
                );
              })}

      </MapContainer>
    </div>
      
  )
}

export default MapOpen