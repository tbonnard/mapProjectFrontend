import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../reducers/userReducer'


import '../../styles/user.css'


const AccountDetails = () => {
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

    <div className='logoutDiv'>
        <button className='buttonTier' onClick={handleLogout}>Logout</button> 
    </div>

    )
}

export default AccountDetails