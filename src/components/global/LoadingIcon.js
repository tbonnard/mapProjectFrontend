import React from 'react'

import loadingGifIcon from '../../media/loadinggif.gif'


import '../../styles/layer1stLevel.css'
import { useSelector } from 'react-redux'

const LoadingIcon = ({}) => {

    const loadingIconState = useSelector(store => store.loadingFlag)


    if (!loadingIconState) {
        return null
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