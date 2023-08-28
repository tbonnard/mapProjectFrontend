import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'


import { Marker, Popup } from 'react-leaflet';

import { setPropertyItem } from '../../reducers/propertyReducer';


import aeroway from '../../media/addresstype/aeroway.png'
import aerialway from '../../media/addresstype/aeroway.png'
import amenity from '../../media/addresstype/building.png'
import barrier from '../../media/addresstype/barrier.png'
import boundary from '../../media/addresstype/boundary.png'
import building from '../../media/addresstype/building.png'
import craft from '../../media/addresstype/craft.png'
import emergency from '../../media/addresstype/emergency.png'
import geological from '../../media/addresstype/geological.png'
import healthcare from '../../media/addresstype/healthcare.png'
import historic from '../../media/addresstype/historic.png'
import highway from '../../media/addresstype/route.png'
import landuse from '../../media/addresstype/landuse.png'
import leisure from '../../media/addresstype/leisure.png'
import manMade from '../../media/addresstype/craft.png'
import military from '../../media/addresstype/military.png'
import natural from '../../media/addresstype/natural.png'
import office from '../../media/addresstype/building.png'
import place from '../../media/addresstype/place.png'
import park from '../../media/addresstype/natural.png'
import power from '../../media/addresstype/power.png'
import transport from '../../media/addresstype/transport.png'
import railway from '../../media/addresstype/railway.png'
import residential from '../../media/addresstype/residential.png'
import route from '../../media/addresstype/route.png'
import shop from '../../media/addresstype/shop.png'
import sport from '../../media/addresstype/sport.png'
import telecom from '../../media/addresstype/telecom.png'
import tourism from '../../media/addresstype/tourism.png'
import water from '../../media/addresstype/water.png'
import waterway from '../../media/addresstype/waterway.png'
import city from '../../media/addresstype/city.png'
import village from '../../media/addresstype/village.png'
import suburb from '../../media/addresstype/suburb.png'
import neighbourhood from '../../media/addresstype/neighbourhood.png'
import country from '../../media/addresstype/country.png'
import state from '../../media/addresstype/state.png'
import island from '../../media/addresstype/island.png'
import mountain from '../../media/addresstype/mountain.png'
import industrial from '../../media/addresstype/industrial.png'

const MapMarker = ({icon, markerData}) => {

  const dispatch = useDispatch()

  const handleClickMarker = (dataMap) => {
     dispatch(setPropertyItem(dataMap))
  }

  const typeImageIcon = {
    "aeroway" : aeroway,
    "aerialway":aerialway,
    "amenity": amenity,
    "barrier": barrier,
    "boundary": boundary,
    "building": building,
    "city": city,
    "county":state,
    "country":country,
    "craft": craft,
    "emergency": emergency,
    "geological": geological,
    "hamlet":village,
    "healthcare": healthcare,
    "highway": highway,
    "historic": historic,
    "island":island,
    "industrial": industrial,
    "landuse": landuse,
    "leisure": leisure,
    "man_made": manMade,
    "mountain_pass":mountain,
    "municipality": city,
    "neighbourhood":neighbourhood,
    "natural":natural,
    "military": military,
    "office": office,
    "park":park,
    "peak":mountain,
    "place": place,
    "power": power,
    "public_transport": transport,
    "railway": railway,
    "residential": residential,
    "road": route,
    "shop": shop,
    "sport": sport,
    "state":state,
    "suburb":suburb,
    "telecom": telecom,
    "tourism": tourism,
    "town": city,
    "village":village,
    "water": water,
    "waterway": waterway,
}
    
    return (    
      <Marker position={[markerData['lat'], markerData['lon']]} icon={icon}>
        <Popup>
          <div className='layerTitleMap'>
            <div className='layerTitleInternal'>
              <div className='layerTitleAddressType'>
                <img src={typeImageIcon[markerData.addresstype]} alt={markerData.addresstype} title={markerData.addresstype}/>
                <p>{markerData.addresstype}</p>
              </div>
              <p>
              {markerData.display_name}
              </p>
            </div>
            <button className='buttonPrimary' onClick={() =>{ handleClickMarker(markerData)}
            }>select</button>
          </div>
        </Popup>
      </Marker>
  )
}

export default MapMarker