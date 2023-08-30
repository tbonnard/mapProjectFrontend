import React from 'react'

import { useNavigate } from 'react-router-dom';

import cancelIcon from '../../media/cancel.png'
import { useSelector } from 'react-redux';

const SubMenu = ({setMenuDisplayed}) => {

    const user = useSelector(store => store.user)

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleProfile = () => {
        navigate('/profile')
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
        {user ? 
            <button className='buttonTier MainColor' onClick={handleProfile}>profile</button>
            :
              <button className='buttonTier MainColor' onClick={handleLogin}>login</button>
            }
        </div>
        <div className='subMenuButtonDiv'>
            <button className='buttonTier MainColor' onClick={handleHowItWorks}>see how it works</button>
        </div>
    </div>
    )
}

export default SubMenu