
import React from 'react';

import '../../styles/map.css'



const ListQueryMapOpen = ({mapQueryDataList}) => {

  return (
      <div className='ListDiv'>
            {mapQueryDataList.map(map => <p>{map.display_name}</p>)}
      </div>

      
  )
}

export default ListQueryMapOpen