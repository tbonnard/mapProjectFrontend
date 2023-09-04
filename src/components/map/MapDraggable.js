// https://stackoverflow.com/questions/65119745/get-current-coordinates-on-dragging-react-leaflet

import {useMapEvents } from 'react-leaflet';


const MapDraggable = () => {

  const map = useMapEvents({
    dragend: (e) => {
      console.log("mapCenter", e.target.getCenter());
      console.log("map bounds", e.target.getBounds());
    }
  });

  return (
   null
      
  )
}

export default MapDraggable