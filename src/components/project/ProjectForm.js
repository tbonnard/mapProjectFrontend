
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector  } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import { createProject } from '../../reducers/projectReducer';


import '../../styles/project.css'
import '../../styles/layer1stLevel.css'

import closeIcon from '../../media/close.png'


const ProjectForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(state => state.user)
    const property = useSelector(state => state.property)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createProject({property, title, description, user}))
        setTitle('')
        setDescription('')
        window.history.back() 
    }

    const closeLayer = () => {
        window.history.back()        
    }

    const handleClick = () => {
        navigate('/login')
    }

    if (!property) {
        return null
    }


    return (

        <div className='layerGlobal'>

            <img className='closeIcon' 
                    src={closeIcon}  
                    onClick={closeLayer}
                    alt='cancel - close'
                    width={"30px"}
                />

            <div className='layerDiv'>
                <h2 className='layerTitle'>propose a new suggestion or improvement for</h2>
                <p>{property.display_name}</p>

                {user ? 
                <form onSubmit={handleSubmit} >
                    <div className='layerFormDiv'>
                        <input type="text" className='enterTextNumber projectFormInput' placeholder='enter a title (max 255)' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                        <textarea className='enterTextNumber projectFormInput' placeholder='provide a description (max 1000)' value={description} onChange={(e) => setDescription(e.target.value)}  ></textarea>
                        <button className="buttonFour" type='submit'>propose</button>
                    </div>
                </form>
                :
                    <div className='loginSigninSubLink'>
                    <p>You must be logged in to add a new suggestion or improvement</p>
                    <button className="buttonFour loginSigninSubLink" type='submit' onClick={handleClick}>login</button>
                </div>
                }

            </div>

        </div>

    )


}

export default ProjectForm