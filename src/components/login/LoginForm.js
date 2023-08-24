import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import { userLogin } from '../../reducers/userReducer'

const LoginForm = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector(state => state.user)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleLoginSubmit = (e) => {
        e.preventDefault()
        dispatch(userLogin({email, password}))
        setEmail('')
        setPassword('')
    }


    useEffect(() => {
        if(user) {
            navigate('/profile')     
        }
    },[user])


    return (
        <div className='container'>
            <h2>Login to your account</h2>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" placeholder='your username' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className=''>
                    <button type='submit'>Login</button>
                </div>
            </form>
          
            <p>Don't have an account?
            <Link className='' to="/signup"> create an account</Link></p>
            
            <Link className='' to="/profile">account</Link>
        </div>
    )

}

export default LoginForm