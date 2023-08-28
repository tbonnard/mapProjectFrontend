
import React from 'react';

const Legend = ({icons}) => {
            
    return (
        <div className='legendGlobalDiv'>
            <h4>Legend</h4>
            {icons.map((icon, index) =>  
                <div key={index} className='legendDivItems'>
                    <img src={icon.icon.options.iconUrl} className='imageLegend'/>
                    <p>{icon.description}</p>
                </div>
            )}
        </div>      
      )
}

export default Legend