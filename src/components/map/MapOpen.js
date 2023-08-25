// https://react-leaflet.js.org/docs/start-introduction/
// https://blog.logrocket.com/react-leaflet-tutorial/
// https://leafletjs.com/examples/quick-start/
// https://nominatim.openstreetmap.org/search.php?q=query&polygon_geojson=1&format=jsonv2
// https://wiki.openstreetmap.org/wiki/Map_features


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { setPropertyItem } from '../../reducers/propertyReducer';

import '../../styles/map.css'

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
import LoadingIcon from '../global/LoadingIcon';




const MapOpen = ({mapQueryData, zoom, loading}) => {

    const typeImageIcon = {
      "aeroway" : aeroway,
      "aerialway":aerialway,
      "amenity": amenity,
      "barrier": barrier,
      "boundary": boundary,
      "building": building,
      "craft": craft,
      "emergency": emergency,
      "geological": geological,
      "healthcare": healthcare,
      "highway": highway,
      "historic": historic,
      "landuse": landuse,
      "leisure": leisure,
      "man_made": manMade,
      "natural":natural,
      "military": military,
      "office": office,
      "park":park,
      "place": place,
      "power": power,
      "public_transport": transport,
      "railway": railway,
      "residential": residential,
      "road": route,
      "shop": shop,
      "sport": sport,
      "telecom": telecom,
      "tourism": tourism,
      "water": water,
      "waterway": waterway,
  }

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const property = useSelector(state => state.property)

  const handleClickMarker = (dataMap) => {
    dispatch(setPropertyItem(dataMap))
  }

  useEffect(() => {
    if (property.display_name)
    {
      navigate(`/property/`)
    }
  }, [property, navigate])


  return (
    <div className=''>
      <MapContainer className='mapItem' key={`${mapQueryData[0].lat}-${mapQueryData[0].lon}-${zoom}`}  center={[mapQueryData[0].lat, mapQueryData[0].lon]} zoom={zoom} scrollWheelZoom={true}>
      
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
                  <Marker key={index} position={position}>
                    <Popup>
                      <div className='layerTitleMap'>
                        <div className='layerTitleInternal'>
                          <div className='layerTitleAddressType'>
                            <img src={typeImageIcon[map.addresstype]} alt={map.addresstype} title={map.addresstype}/>
                            <p>{map.addresstype}</p>
                          </div>
                          <p>
                          {map.display_name}
                          </p>
                        </div>
                        <button className='buttonPrimary' onClick={() =>{ handleClickMarker(map)}
                        }>select</button>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}

      </MapContainer>
    </div>
      
  )
}

export default MapOpen