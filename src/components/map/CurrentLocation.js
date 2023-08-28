
import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setNotification } from '../../reducers/notificationTempReducer'
import { getMapQueryDataUserLocation } from '../../reducers/mapQueryReducer'
import { setLoading } from '../../reducers/loadingReducer'
import { setUserLocationFlag } from '../../reducers/userLocationReducer'

const CurrentLocation = ({defaultCoordinates}) => {    
    
    const dispatch = useDispatch()
    const userLocationFlag = useSelector(store => store.userLocationFlag )
    
    const [coordinates, setCoordinates] = useState([])

    const SuccessGeoLoc = (position) => {
        dispatch(setNotification({message:' Here are properties with suggestions within a 10km radius', style:'success', time:5000}))
        // dispatch(setUserLocationFlag(false))
        if (position.coords) {
            setCoordinates(position.coords)
        } else {
            dispatch(setNotification({message:'There was an error with your location, default location is presented on the map', style:'warning', time:5000}))
        }
    }


    const updateErrorCount = (error) => {
        // dispatch(setUserLocationFlag(false))
        if (error.code) {
            dispatch(setNotification({message:'Your location is blocked, default location is presented on the map', style:'warning', time:5000}))
            }
        }

    useEffect(() => {
        if (!userLocationFlag) { 
            dispatch(setLoading(true))
            setCoordinates(defaultCoordinates)
            dispatch(setNotification({message:'Awaiting on loading properties with suggestions in a 10km radius', style:'warning', time:5000}))
            const options = {
                enableHighAccuracy: true,
                };
            navigator.geolocation.getCurrentPosition(SuccessGeoLoc, updateErrorCount, options)
            dispatch(setUserLocationFlag(true))
        }
    }, [dispatch])


    useEffect(() => {
        if (coordinates.latitude) {
            const itemObject = {latitude:coordinates.latitude, longitude:coordinates.longitude}
            dispatch(getMapQueryDataUserLocation(itemObject))
        } 
    },[coordinates, dispatch])

 
    return (
            <></>
    )
}

export default CurrentLocation


