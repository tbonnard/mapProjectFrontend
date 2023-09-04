import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import { Marker, Popup } from 'react-leaflet';

import { setPropertyItem } from '../../reducers/propertyReducer';
import { getProjectsfromProperty } from '../../reducers/projectReducer';

import Follow from '../follow/Follow';

import goIcon from '../../media/gogreen.png'

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
import MarkerProjectsList from './MarkerProjectsList';


import '../../styles/map.css'


const MapMarker = ({icon, markerData}) => {

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
    
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleClickMarker = (dataMap) => {
    dispatch(setPropertyItem(dataMap))
    dispatch(getProjectsfromProperty(dataMap))

  }

  const handleClickButtonMarker = () => {
    navigate(`/property`)
    window.scrollTo(0,0);
  }

  const handleClick = () => {
    navigate('/suggestion')
}

 
    return (    
      <Marker position={[markerData['lat'], markerData['lon']]} icon={icon} 
      eventHandlers={{
        click: (e) => {
          handleClickMarker(markerData)
        },
      }}
      >
        
        <Popup  className='markerMap'>
          <div className='layerTitleMap'>

            <div className='layerTitleInternal'>
              <div className='layerTitleAddressType'>
                <img src={typeImageIcon[markerData.addresstype]} alt={markerData.addresstype} title={markerData.addresstype}/>
                <p>{markerData.addresstype}</p>
              </div>
              
              <div className='popUpNameGoIcon'>
                {markerData.name ? <h3>{markerData.name}</h3> : <h3>{markerData.display_name}</h3>}
              
                <img className='goIcon' 
                        src={goIcon}  
                        onClick={handleClickButtonMarker}
                        alt='See details'
                        title='See details'
                        width={"30px"}
                    />
              </div>

            </div>

            {/* <button className='buttonPrimary' onClick={handleClickButtonMarker}>select</button> */}
          </div>
        
          <MarkerProjectsList markerData={markerData}/>

          <div className='bottomMarkerActions'>
            <div className='addSuggestionMarkerItem'>
                <button onClick={handleClick} className='buttonTier MainColor'>add your suggestion</button>
              </div>

              <Follow />
          </div>

        </Popup>
        
        

      </Marker>
  )
}

export default MapMarker