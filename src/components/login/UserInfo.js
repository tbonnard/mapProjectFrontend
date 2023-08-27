import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../reducers/userReducer'

import CloseIcon from '../global/CloseIcon';
import FollowItems from '../follow/FollowItems';


import '../../styles/user.css'


const UserInfo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector(state => state.user)

    const handleLogout= ()=>{
        dispatch(logoutUser())
    }
    
    useEffect(() => {
        if(!user) {
            navigate('/login')     
        }
    },[user])

    if (!user) {
        return null
    }

    return (
        <div className='layerGlobal'>

            <CloseIcon />

            <div className='layerFormDiv'>
                <h2>Hi {user.email}!</h2>
            </div>

            <FollowItems />

            <div className='logoutDiv'>
                <button className='buttonTier' onClick={handleLogout}>Logout</button> 
            </div>

       </div>
    )
}

export default UserInfo