// https://react-leaflet.js.org/docs/start-introduction/
// https://blog.logrocket.com/react-leaflet-tutorial/
// https://leafletjs.com/examples/quick-start/

import React, {  useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import '../../styles/map.css'

import MapOpen from './MapOpen'
import SearchForm from './SearchForm';
import ListQueryMapOpen from './ListQueryMapOpen'

// TODO: liste search item à droite map & clic dessus pour marker --> display all properties received
// TODO: display items near me -- default country tbc
// FIXME: adjust zoom based on all items returned


const MapOpenGlobal = () => {

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
  
const defaultBound = [
      [50.505, -29.09],
      [52.505, 29.09],
    ]

  const mapQueryData = useSelector(state => state.mapQuery)

  const [loading, setLoading] = useState(false)
  const [boundsItems, setboundsItems ] = useState(defaultBound)
  const [mapData, setMapData ] = useState(defaultData)

  const [zoom, setZoom] = useState(18)
  //lat - long -- max zoom 18 

  useEffect(() => {
      setLoading(false)
    if (mapQueryData.length > 0) {
      setMapData(mapQueryData)
      // setZoom(13)
      let newBounds = []
      mapQueryData.map(item =>  newBounds.push([item.lat, item.lon]) )
      setboundsItems(newBounds)
    }
  }, [mapQueryData])


  return (
      <div className='divSearchMap'>
            <div className='introDiv divIntroSearch'>
            <SearchForm setLoading={setLoading}/>
            </div>
            <div className='mapGlobal' id='map' >
                  <div className='mapListDiv'>
                        <MapOpen loading={loading} setLoading={setLoading} mapQueryData={mapData} zoom={zoom} boundsItems={boundsItems}/>
                        {/* <ListQueryMapOpen mapQueryDataList={mapQueryData}/> */}
                  </div>
            </div>
      </div>

      
  )
}

export default MapOpenGlobal