import voteServices from '../services/voteServices'


import { addVoteUserProperty, removeVoteUserProperty } from './voteUserPropertyProjectReducer';
import { addVote, removeVote } from './votePropertyProjectReducer'


export const checkUserVotesAllPropertiesFollowed = (itemObject) => {
    return async dispatch => {
        const votes = await voteServices.checkUserVotesAllPropertiesFollowed(itemObject)
        dispatch({
            type: "CHECK_VOTES_USER_ALL_PROPERTIES_FOLLOWED",
            data: votes
            })
    }
}

export const removeVoteAllPropertyFollowed = (item) => {
    return async dispatch => {
        await voteServices.removeVote(item)
        dispatch({
            type: "REMOVE_VOTE_USER_ALL_PROPERTIES_FOLLOWED",
            data: item
            })
            dispatch(removeVote(item))
            dispatch(removeVoteUserProperty(item))

    }
}

export const addVoteAllPropertyFollowed = (itemObject) => {
    return async dispatch => {
        const vote = await voteServices.addVote(itemObject)
        dispatch({
            type: "ADD_VOTE_USER_ALL_PROPERTIES_FOLLOWED",
            data: vote
            })
            dispatch(addVoteUserProperty(vote))
            dispatch(addVote(vote))
    }
}


const voteAllPropertiesFollowedReducer = (state=[], action) => {
    switch(action.type) {
        case 'CHECK_VOTES_USER_ALL_PROPERTIES_FOLLOWED':
            return action.data
        case 'REMOVE_VOTE_USER_ALL_PROPERTIES_FOLLOWED':
            const newState = state.filter((item) => item.id !== action.data )
            return newState
        case 'ADD_VOTE_USER_ALL_PROPERTIES_FOLLOWED':
            return [
                ...state,
                action.data
              ];
        default:
            return state
    }
}

export default voteAllPropertiesFollowedReducer
