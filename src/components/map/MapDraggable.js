// https://stackoverflow.com/questions/65119745/get-current-coordinates-on-dragging-react-leaflet
import { useDispatch } from 'react-redux';

import {useMapEvents } from 'react-leaflet';

import { getMapQueryDataSearchNearLocation } from '../../reducers/mapQueryReducer';
import { setBounds } from '../../reducers/boundsReducer';


// bbox = left,bottom,right,top
// bbox = min Longitude , min Latitude , max Longitude , max Latitude 
// south Latitude, north Latitude, west Longitude, east Longitude


const MapDraggable = () => {

  const dispatch = useDispatch()

  const map = useMapEvents({
    dragend: (e) => {
      // console.log("mapCenter", e.target.getCenter());
      // console.log("map bounds", e.target.getBounds());

      const boundsToSet = [[parseFloat(e.target.getBounds()['_northEast']['lat']), parseFloat(e.target.getBounds()['_northEast']['lng'])], [parseFloat(e.target.getBounds()['_southWest']['lat']), parseFloat(e.target.getBounds()['_southWest']['lat'])]]
      // console.log(boundsToSet)
      // dispatch(setBounds(boundsToSet))
      
      const itemObject = {latitude:e.target.getCenter()['lat'], longitude:e.target.getCenter()['lng']}
      // dispatch(getMapQueryDataSearchNearLocation(itemObject))
    },
    click: (e) => {
      const zoomCurrent = map.getZoom()
      // console.log(e.latlng.lat,e.latlng.lng);
      map.flyTo([e.latlng.lat,e.latlng.lng], zoomCurrent)
        }
  });

  return (
   null
      
  )
}

export default MapDraggable