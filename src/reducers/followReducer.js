import followServices from '../services/followServices'

export const checkFollow = (itemObject) => {
    return async dispatch => {
        const follow = await followServices.checkFollow(itemObject)
        dispatch({
            type: "CHECK_FOLLOW",
            data: follow
            })
    }
}

export const removeFollow = (itemObject) => {
    return async dispatch => {
        const follow = await followServices.removeFollow(itemObject)
        dispatch({
            type: "REMOVE_FOLLOW",
            data: follow
            })
    }
}

export const addFollow = (itemObject) => {
    return async dispatch => {
        const follow = await followServices.addFollow(itemObject)
        dispatch({
            type: "ADD_FOLLOW",
            data: follow
            })
    }
}


const followReducer = (state=[], action) => {
    switch(action.type) {
        case 'CHECK_FOLLOW':
            return action.data
        case 'REMOVE_FOLLOW':
                return action.data
        case 'ADD_FOLLOW':
            return action.data
        default:
            return state
    }
}

export default followReducer