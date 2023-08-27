// https://react-leaflet.js.org/docs/start-introduction/
// https://blog.logrocket.com/react-leaflet-tutorial/
// https://leafletjs.com/examples/quick-start/

import React, {  useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import '../../styles/map.css'

import { setLoading } from '../../reducers/loadingReducer';
import { setNotification } from '../../reducers/notificationTempReducer'
import { setBounds } from '../../reducers/boundsReducer';


import MapOpen from './MapOpen'
import SearchForm from './SearchForm';
import CurrentLocation from './CurrentLocation';

// TODO: display items near me -- default country tbc

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
          "boundingbox": [
                "45.4995433",
                "45.4999879",
                "-73.5775632",
                "-73.5769517"
          ],
          "geojson": {
                "type": "Polygon",
                "coordinates": [
                      [
                            [
                                  -73.5775632,
                                  45.4996899
                            ],
                            [
                                  -73.5772467,
                                  45.4995433
                            ],
                            [
                                  -73.5769959,
                                  45.4997924
                            ],
                            [
                                  -73.5769517,
                                  45.4998413
                            ],
                            [
                                  -73.5772668,
                                  45.4999879
                            ],
                            [
                                  -73.5772977,
                                  45.4999569
                            ],
                            [
                                  -73.5775632,
                                  45.4996899
                            ]
                      ]
                ]
          }
    }

]
  
      const defaultCityCoordinates = {'latitude':45.5019, 'longitude':-73.5674}

      const defaultBound = [
            [45.539024, -73.576126],
            [45.470689, -73.630028],
      ]

      const mapQueryData = useSelector(state => state.mapQuery)
      const loadingFlag = useSelector(state => state.loadingFlag)

      // const [bounds, setbounds ] = useState(defaultBound)
      const [mapData, setMapData ] = useState([])

      const [zoom, setZoom] = useState(18)
      //lat - long -- max zoom 18 

      useEffect(() => {
            if (mapQueryData.length > 0) {
                  setMapData(mapQueryData)
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
      }, [mapQueryData])


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