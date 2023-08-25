import React from 'react'

import { useNavigate } from 'react-router-dom';

import loadingGifIcon from '../../media/loadinggif.gif'


import '../../styles/layer1stLevel.css'

const LoadingIcon = ({}) => {


    const closeLayer = () => {
        
    }

    return (
               <img className='loadingIcon' 
                    src={loadingGifIcon}  
                    alt='cancel - close'
                    width={"30px"}
                />
    )
}

export default LoadingIcon