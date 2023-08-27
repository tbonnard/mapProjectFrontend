import mapQueryServices from '../services/mapQueryServices'

import { setNotification } from './notificationTempReducer'

export const getMapQueryData = (parameterData) => {
    return async dispatch => {
        const propertyItem = await mapQueryServices.getMapQueryData(parameterData)
        dispatch({
            type: "MAP_QUERY",
            data: propertyItem
            })
            dispatch(setNotification({message:'Only exact matching results are displayed! For places with suggestions near, click on the "near button"', style:'success', time:7000}))
    }
}


export const getMapQueryDataUserLocation = (itemObject) => {
    return async dispatch => {
        let propertyItem = await mapQueryServices.getMapQueryDataUserLocation(itemObject)
        if (!propertyItem) {
            propertyItem = []
        }
        dispatch({
            type: "MAP_QUERY_USER_LOCATION",
            data: propertyItem
            })
            if (propertyItem.length === 0) {
                dispatch(setNotification({message:'There are currently no properties with suggestions in a 10km radios! Add new ones!', style:'warning', time:10000}))
            }
    }
}

export const resetMapQuery = () => {
    return async dispatch => {
        dispatch({
            type: "RESET_MAP_QUERY",
            data: []
            })
    }
}

const mapQueryReducer = (state=[], action) => {
    switch(action.type) {
        case 'MAP_QUERY':
            return action.data
        case 'RESET_MAP_QUERY':
                return action.data
        case 'MAP_QUERY_USER_LOCATION':
            return action.data
        default:
            return state
    }
}

export default mapQueryReducer