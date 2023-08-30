
import React from 'react';


const Icons = ({icons}) => {

            
    return (
        <>
        {icons.map((icon, index) =>  
            <div key={index} className='legendDivItems'>
                <img src={icon.icon.options.iconUrl} className='imageLegend'/>
                <p>{icon.description}</p>
            </div>
        )}
    
            </>     
      )
}

export default Icons