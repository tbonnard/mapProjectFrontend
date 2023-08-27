
import React, { useEffect, useCallback } from 'react';

import { TileLayer, useMap } from 'react-leaflet';
import MapMarker from './MapMarker';
import SearchNearPoint from './SearchNearPoint';


const MapOpenMid = ({mapQueryData, bounds, setPositionCentered, positionCentered}) => {

  const map = useMap()

  useEffect(() => {
    setPositionCentered(map.getCenter())
    map.fitBounds(bounds);
  }, [map, bounds]);


  const onMove = useCallback(() => {
    setPositionCentered(map.getCenter())
  }, [map])


  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])


  return (
    <>
        <SearchNearPoint map={map} positionCentered={positionCentered}/>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    
         {mapQueryData.map((mapData, index) => {
                return (
                  <MapMarker map={map} key={index} markerData={mapData} bounds={bounds} setPositionCentered={setPositionCentered}/>
                );
              })}
    </>

      
  )
}

export default MapOpenMid