import propertyServices from '../services/propertyServices'

export const propertyCreation = (itemObject) => {
    return async dispatch => {
        const propertyItem = await propertyServices.propertyCreation(itemObject)
        dispatch({
            type: "PROPERTY",
            data: propertyItem
            })
    }
}

export const setPropertyItem = (itemObject) => {
    return async dispatch => {
        dispatch({
            type: "SET_PROPERTY_ITEM",
            data: itemObject
            })
    }
}

export const propertyItem = (itemObject) => {
    return async dispatch => {
        dispatch({
            type: "TEMP_PROPERTY_SELECTED",
            data: itemObject
            })
    }
}

export const resetProperty = () => {
    return async dispatch => {
        dispatch({
            type: "RESET_PROPERTY",
            data: []
            })
    }
}

const propertyReducer = (state=[], action) => {
    switch(action.type) {
        case 'PROPERTY':
            return action.data
        case 'TEMP_PROPERTY_SELECTED':
            return action.data
        case 'SET_PROPERTY_ITEM':
                return action.data
        case 'RESET_PROPERTY':
            return action.data
        default:
            return state
    }
}

export default propertyReducer