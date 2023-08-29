import voteServices from '../services/voteServices'

import { setPropertyItem } from './propertyReducer'


//when lot of data, might change to get votes per project and not per property
export const checkVotesProperty = (itemId) => {
    return async dispatch => {
        const follow = await voteServices.checkVotes(itemId)
        dispatch({
            type: "CHECK_VOTES_PROPERTY",
            data: follow
            })
    }
}

export const checkVotesProject = (itemId) => {
    return async dispatch => {
        const follow = await voteServices.checkVotes(itemId)
        dispatch({
            type: "CHECK_VOTES_PROJECT",
            data: follow
            })
    }
}

export const removeVote = (item) => {
    return async dispatch => {
        dispatch({
            type: "REMOVE_VOTE",
            data: item
            })
    }
}

export const addVote = (itemObject) => {
    return async dispatch => {
        dispatch({
            type: "ADD_VOTE",
            data: itemObject
            })
    }
}

const votePropProjReducer = (state=[], action) => {
    switch(action.type) {
        case 'CHECK_VOTES_PROPERTY':
            return action.data
        case 'CHECK_VOTES_PROJECT':
            return [
                ...state,
                action.data
              ];
        case 'REMOVE_VOTE':
            const newState = state.filter((item) => item.id !== action.data )
            return newState
        case 'ADD_VOTE':
            return [
                ...state,
                action.data
                ];
        default:
            return state
    }
}

export default votePropProjReducer