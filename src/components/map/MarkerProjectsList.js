
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProjectsfromProperty } from '../../reducers/projectReducer';
import MarkerProjectsListItem from './MarkerProjectsListItem';
import { useNavigate } from 'react-router-dom';

const MarkerProjectsList = ({markerData}) => {
            
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const projects = useSelector(store => store.projects)

    useEffect(() => {
        dispatch(getProjectsfromProperty(markerData))
    }, [markerData, dispatch])


    const handleClick = () => {
        navigate('/suggestion')
    }


    if (projects.length === 0) {
        return null
    }

    return (
        <div className='divPopUpProjects'>
            {projects.map(proj => <MarkerProjectsListItem key={proj.id} project={proj} />)}

            <div className='addSuggestionMarkerItem'>
              <button onClick={handleClick} className='buttonTier MainColor'>add your suggestion</button>
            </div>

        </div>      
      )
}

export default MarkerProjectsList