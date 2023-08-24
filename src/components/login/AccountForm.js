import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import { createAccount } from '../../reducers/userReducer'

import CloseIcon from '../global/CloseIcon';

const AccountForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector(state => state.user)

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleCreateAccount = (e) => {
        e.preventDefault()
        const accountObject = {password:password, confirmPassword:confirmPassword, email:email}
        dispatch(createAccount(accountObject))
        setPassword('')
        setConfirmPassword('')
        setEmail('')
    }


    useEffect(() => {
        if(user) {
            navigate('/profile')     
        }
    },[user])

    return (
        <div className='layerGlobal'>

            <CloseIcon />

            <div className='layerDiv'>
                <h2 className='layerTitle'>Create an account</h2>
                <form onSubmit={handleCreateAccount} className='layerFormDiv'>
                    <input type="email" placeholder='your email' value={email} onChange={(e) => setEmail(e.target.value)} className='enterTextNumber projectFormInput' required/>
                    <input type="password" placeholder='your password (6 characters min)' value={password} onChange={(e) => setPassword(e.target.value)} className='enterTextNumber projectFormInput' required/>
                    <input type="password" placeholder='confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='enterTextNumber projectFormInput' required/>
                    <button type='submit' className="buttonFour loginSigninSubLink">create</button>
                </form>

                <div className='loginSigninSubLink'>
                    <p>Already have an account?
                    <Link className='buttonTier' to="/login"> Login to your account</Link></p>
                </div>
            </div>
        </div>
    )
}

export default AccountForm