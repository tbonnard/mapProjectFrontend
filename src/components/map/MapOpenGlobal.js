import React, {  useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import '../../styles/map.css'

import { setLoading } from '../../reducers/loadingReducer';
import { setNotification } from '../../reducers/notificationTempReducer'
import { setBounds } from '../../reducers/boundsReducer';


import MapOpen from './MapOpen'
import SearchForm from './SearchForm';
import CurrentLocation from './CurrentLocation';


const MapOpenGlobal = () => {

      const dispatch = useDispatch()

      const defaultData = [
            {
            "place_id": 134240591,
            "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
            "osm_type": "way",
            "osm_id": 124401312,
            "lat": "45.49974115",
            "lon": "-73.57727986884024",
            "category": "building",
            "type": "commercial",
            "place_rank": 30,
            "importance": 9.99999999995449e-06,
            "addresstype": "building",
            "name": "Cossette",
            "display_name": "Cossette, 2100, Rue Drummond, Ville-Marie, Montréal, Agglomération de Montréal, Montréal (région administrative), Québec, H3G 1X1, Canada",
            }
      ]
  
      const defaultCityCoordinates = {'latitude':45.5019, 'longitude':-73.5674}

      const defaultBound = [
            [45.539024, -73.576126],
            [45.470689, -73.630028],
      ]

      const mapQueryData = useSelector(state => state.mapQuery)
      const loadingFlag = useSelector(state => state.loadingFlag)
      const userLocationFlag = useSelector(state => state.userLocationFlag)

      const [mapData, setMapData ] = useState([])
      const [zoom, setZoom] = useState(18)
      //lat - long -- max zoom 18 

      useEffect(() => {
            setMapData(mapQueryData)
            if (mapQueryData.length > 0) {
                  let newBounds = []
                  mapQueryData.map((item) =>newBounds.push([item.lat, item.lon]) )
                  dispatch(setBounds(newBounds))
                  dispatch(setLoading(false))
            } else {
                  if (loadingFlag) {
                        dispatch(setNotification({message:'No results found related to your search', style:'warning', time:5000}))
                  }
                  dispatch(setLoading(false))
            }
      }, [mapQueryData, dispatch])


  return (
      <div className='divSearchMap'>
            <CurrentLocation defaultCoordinates={defaultCityCoordinates} />
            <div className='introDiv divIntroSearch'>
            <SearchForm />
            </div>
            <div className='mapGlobal' id='map' >
                  <div className='mapListDiv'>
                        <MapOpen mapQueryData={mapData} zoom={zoom} />
                  </div>
            </div>
      </div>

      
  )
}

export default MapOpenGlobal