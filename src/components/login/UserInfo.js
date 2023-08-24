import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import { logoutUser } from '../../reducers/userReducer'


const UserInfo = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    const handleLogout= ()=>{
        dispatch(logoutUser())
    }
    

    if (!user) {
        return null
    }

    return (
        <div className='container'>
            <h2>Hi {user.username}!</h2>
            <button className="submit_button" onClick={handleLogout}>Logout</button> 
            <div className='divLinksVisitor'>
                <Link className='divLinksVisitorLinks' to="/visitor">Visitor</Link>
                <Link className='divLinksVisitorLinks' to="/">Home</Link>
            </div>
       </div>
    )
}

export default UserInfo