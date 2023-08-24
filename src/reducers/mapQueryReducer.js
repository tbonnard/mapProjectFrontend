import mapQueryServices from '../services/mapQueryServices'

export const getMapQueryData = (parameterData) => {
    return async dispatch => {
        const propertyItem = await mapQueryServices.getMapQueryData(parameterData)
        dispatch({
            type: "MAP_QUERY",
            data: propertyItem
            })
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
        default:
            return state
    }
}

export default mapQueryReducer