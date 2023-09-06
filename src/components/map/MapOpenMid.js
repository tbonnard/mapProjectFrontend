
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TileLayer, useMap, Marker } from 'react-leaflet';
import MapMarker from './MapMarker';
import * as L from "leaflet";

import SearchNearPoint from './SearchNearPoint';
import SearchAroundCenterAll from './SearchAroundCenterAll';
import Legend from './Legend';
import MapDraggable from './MapDraggable';
import SearchAroundCenterParameter from './SearchAroundCenterParameter';

import { setPositionCenter } from '../../reducers/centerPositionReducer';

// FIXME: when new project, marker icon does not update (need to research)


const MapOpenMid = ({mapQueryData, bounds}) => {

  const map = useMap()
  const dispatch = useDispatch()

  const positionCenter = useSelector(store => store.centerPosition)

  // TODO: custom images in icon based on type
  // https://blogs.absyz.com/2019/04/03/customizing-the-markers-in-your-leaflet-map
  // https://github.com/pointhi/leaflet-color-markers
  // https://github.com/lennardv2/Leaflet.awesome-markers
  // upload images on server and update url
  
  var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });


  var GoldIconCenter = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const iconsList = [{'icon': blueIcon, 'description':'without suggestions'}, {'icon': greenIcon, 'description':'with suggestions'}, {'icon': GoldIconCenter, 'description':'center, search point'} ]
  
  
  useEffect(() => {
    dispatch(setPositionCenter(map.getCenter()))
    },[dispatch, mapQueryData])

  return (
    <>
        <MapDraggable />
        
        <div className='searchMapButtons'>
          <SearchNearPoint map={map} bounds={bounds}/>

          <SearchAroundCenterAll map={map} bounds={bounds}/>

          <SearchAroundCenterParameter map={map} bounds={bounds} />
        </div>
     
        <Marker position={positionCenter} icon={GoldIconCenter} />

        <Legend icons={iconsList}/>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    
         {mapQueryData.map((mapData, index) => {
            let sourceOSM = true
            if (mapData['with_suggestions']) {sourceOSM = false}   
                return (
                  <MapMarker icon={sourceOSM ? blueIcon : greenIcon } key={index} markerData={mapData} />
                );
              })}
    </>

      
  )
}

export default MapOpenMid