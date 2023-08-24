import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../reducers/userReducer'


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
        <div className='container'>
            <h2>Hi {user.email}!</h2>
            <button className="submit_button" onClick={handleLogout}>Logout</button> 
            <div className='divLinksVisitor'>
                <Link className='divLinksVisitorLinks' to="/">Home</Link>
            </div>
       </div>
    )
}

export default UserInfo