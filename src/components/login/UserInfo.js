import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


import CloseIcon from '../global/CloseIcon';
import FollowGlobal from '../follow/FollowGlobal';

import '../../styles/user.css'


const UserInfo = () => {
    const navigate = useNavigate();

    const user = useSelector(state => state.user)
    
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

            <FollowGlobal />

       </div>
    )
}

export default UserInfo