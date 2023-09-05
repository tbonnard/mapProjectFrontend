import mapQueryServices from '../services/mapQueryServices'

import { setNotification } from './notificationTempReducer'
import { setLoading } from './loadingReducer'
import { setLongLoading } from './loadingReducer'

export const getMapQueryData = (parameterData) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const propertyItem = await mapQueryServices.getMapQueryData(parameterData)
        dispatch({
            type: "MAP_QUERY",
            data: propertyItem
            })
            if (propertyItem.length === 0) {
                dispatch(setNotification({message:'No results. Please try again with other text', style:'warning', time:7000}))
            } else {
                dispatch(getMapQueryDataDBData(propertyItem))
                dispatch(setNotification({message:'Only results exactly matching are displayed! For other near places with suggestions, click on the "near button"', style:'success', time:7000}))
            }
            dispatch(setLoading(false))
        }
}


export const getMapQueryDataSearchNearLocation = (itemObject) => {
    return async dispatch => {
        dispatch(setLoading(true))
        let propertyItem = await mapQueryServices.getMapQueryDataSearchNearLocation(itemObject)
        if (!propertyItem) {
            propertyItem = []
        }
        dispatch({
            type: "MAP_QUERY_USER_LOCATION",
            data: propertyItem
            })
            if (propertyItem.length === 0) {
                dispatch(setNotification({message:'There are currently no properties with suggestions in a 10km radius or zoom in!', style:'warning', time:10000}))
            }
            dispatch(setLoading(false))
    }
}


export const getMapQueryDataDBData = (parameterData) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const propertyItem = await mapQueryServices.getMapQueryDataDBData(parameterData)
        dispatch({
            type: "MAP_QUERY_DB_DATA",
            data: propertyItem
            })
            dispatch(setLoading(false))
    }
}



export const getMapQueryDataAroundCenterAll = (parameterData) => {
    return async dispatch => {
        dispatch(setLongLoading(true))
        const propertyItem = await mapQueryServices.getMapQueryDataAroundCenterAll(parameterData)
        const newObjects = []
        let typesIds = ''
        for (const i in propertyItem['elements']) {
            if (typesIds.length === 0) {
                typesIds = propertyItem['elements'][i]['type'].charAt(0).toUpperCase()+propertyItem['elements'][i]['id'] 
            } else {
                typesIds = typesIds + ',' + propertyItem['elements'][i]['type'].charAt(0).toUpperCase()+propertyItem['elements'][i]['id'] 
            }       
        }

        const newObjectOSM = await mapQueryServices.getItemsIdsToOSM(typesIds)
        
        if (!newObjectOSM) {

            for (const i in propertyItem['elements']) {
                const typeId = propertyItem['elements'][i]['type'].charAt(0).toUpperCase()+propertyItem['elements'][i]['id']
                newObjectOSM = await mapQueryServices.getItemsIdsToOSM(typeId)
                if (newObjectOSM) {
                    newObjects.push(newObjectOSM[0])
                }
            }
        }

        dispatch({
            type: "MAP_QUERY_AROUND_CENTER_ALL",
            data: newObjectOSM
            })
            dispatch(getMapQueryDataDBData(newObjectOSM))
            dispatch(setLoading(false))
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
        case 'MAP_QUERY_DB_DATA':
                    return action.data
        case 'MAP_QUERY_AROUND_CENTER_ALL':
            return action.data
        default:
            return state
    }
}

export default mapQueryReducer