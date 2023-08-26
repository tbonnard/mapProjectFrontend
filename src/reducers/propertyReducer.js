import propertyServices from '../services/propertyServices'

import { createProject } from './projectReducer'


export const propertyCreation = (property, title, description, user) => {
    return async dispatch => {
        const propertyItem = await propertyServices.propertyCreation(property)
        dispatch({
            type: "PROPERTY",
            data: propertyItem
            })

            const projectItem = {title, description, property:propertyItem.id, creator:user.id}
            dispatch(createProject(projectItem));
    }
}

export const setPropertyItem = (itemObject) => {
    return async dispatch => {
        let newItem = itemObject
        const propertyItem = await propertyServices.checkIfPropertyCreated(itemObject)
        if (propertyItem) {
            newItem = propertyItem
            localStorage.setItem('propertyProjectApp', JSON.stringify(propertyItem));
        } else {
            localStorage.setItem('propertyProjectApp', JSON.stringify(propertyItem));
        }
        dispatch({
            type: "SET_PROPERTY_ITEM",
            data: newItem
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