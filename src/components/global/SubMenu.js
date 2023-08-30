import React from 'react'

import { useNavigate } from 'react-router-dom';

import cancelIcon from '../../media/cancel.png'

const SubMenu = ({setMenuDisplayed}) => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleHowItWorks = () => {
        navigate('/howitworks')
    }

    const closeLayer = () => {
        setMenuDisplayed(false)
    }

    return (
    <div className='MenuGlobalSubMenu'>

        <img className='closeIconMenu' 
            src={cancelIcon}  
            onClick={closeLayer}
            alt='cancel - close'
            width={"30px"}
        />
        <div className='subMenuButtonDiv'>
            <button className='buttonTier MainColor' onClick={handleLogin}>login</button>
        </div>
        <div className='subMenuButtonDiv'>
            <button className='buttonTier MainColor' onClick={handleHowItWorks}>see how it works</button>
        </div>
    </div>
    )
}

export default SubMenu