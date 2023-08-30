
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProjectsfromProperty } from '../../reducers/projectReducer';
import MarkerProjectsListItem from './MarkerProjectsListItem';

const MarkerProjectsList = ({markerData}) => {
            
    const dispatch = useDispatch()

    const projects = useSelector(store => store.projects)

    useEffect(() => {
        dispatch(getProjectsfromProperty(markerData))
    }, [markerData, dispatch])


    if (projects.length === 0) {
        return null
    }

    return (
        <div className='divPopUpProjects'>
            {projects.map(proj => <MarkerProjectsListItem project={proj} />)}
        </div>      
      )
}

export default MarkerProjectsList