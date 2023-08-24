
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { createProject } from '../../reducers/projectReducer'

import '../../styles/project.css'
import '../../styles/layer1stLevel.css'

import closeIcon from '../../media/close.png'


const ProjectForm = ({property, setFlagCreateProject}) => {
    
    // moins de 1000 mots 
    // be respectful 
    // Mettre loading
    // Report message

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createProject({title, description, property:property.id}))
        setTitle('')
        setDescription('')
        setFlagCreateProject(false)
    }

    const closeLayer = () => {
        setFlagCreateProject(false)
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
                <h2 className='layerTitle'>propose a new suggestion or improvement</h2>
                <p>{property.display_name}</p>
                {/* <p>propose a new project or an improvement</p> */}
                <form onSubmit={handleSubmit} >
                    <div className='layerFormDiv'>
                        <input type="text" className='enterTextNumber projectFormInput' placeholder='enter a title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                        <textarea className='enterTextNumber projectFormInput' placeholder='provide a description' value={description} onChange={(e) => setDescription(e.target.value)}  ></textarea>
                        <button className="buttonFour" type='submit'>propose</button>
                    </div>
                </form>
            </div>

        </div>

    )


}

export default ProjectForm