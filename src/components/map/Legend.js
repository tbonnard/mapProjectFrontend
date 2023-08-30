
import React, { useState } from 'react';


//collapse

import Icons from './Icons';

import collapseIcon from '../../media/collapse.png'
import expandIcon from '../../media/expand.png'


const Legend = ({icons}) => {

    const [statusExpand, setStatusExpand] = useState(false)
           
    const handleClick = () => {
        setStatusExpand(!statusExpand)
    }

    return (
        <div className='legendGlobalDiv'>
            <h4>Legend</h4>
            
            {statusExpand ? 
                <img className='closeIcon' 
                    src={collapseIcon}  
                    onClick={handleClick}
                    alt='cancel - close'
                    width={"30px"}
                />
                :
                <img className='closeIcon' 
                    src={expandIcon}  
                    onClick={handleClick}
                    alt='cancel - close'
                    width={"30px"}
                />
            }

            {statusExpand && 
            <Icons icons={icons} />
            }

        </div>      
      )
}

export default Legend