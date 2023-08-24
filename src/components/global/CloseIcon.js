import React from 'react'

import { useNavigate } from 'react-router-dom';

import closeIcon from '../../media/close.png'

const CloseIcon = () => {

    const navigate = useNavigate();


    const closeLayer = () => {
        navigate('/')
    }

    return (
               <img className='closeIcon' 
                    src={closeIcon}  
                    onClick={closeLayer}
                    alt='cancel - close'
                    width={"30px"}
                />
    )
}

export default CloseIcon