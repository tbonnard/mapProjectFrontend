import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../reducers/userReducer'

import CloseIcon from '../global/CloseIcon';
import FollowItems from '../follow/FollowItems';


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
                <button className="buttonFour loginSigninSubLink" onClick={handleLogout}>Logout</button> 
                {/* <div className='loginSigninSubLink'>
                    <Link className='buttonTier' to="/">Home</Link>
                </div> */}
            </div>

                <FollowItems />
       </div>
    )
}

export default UserInfo