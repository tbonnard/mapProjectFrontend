import voteServices from '../services/voteServices'

import { addVote } from './votePropProjReducer'
import { removeVote } from './votePropProjReducer'

//when lot of data, might change to get votes per project and not per property
export const checkVotesUserProperty = (itemObject) => {
    return async dispatch => {
        const votes = await voteServices.checkUserVotes(itemObject)
        dispatch({
            type: "CHECK_VOTES_USER_PROPERTY",
            data: votes
            })
    }
}

export const removeVoteUserProperty = (item) => {
    return async dispatch => {
        await voteServices.removeVote(item)
        dispatch({
            type: "REMOVE_VOTE_USER_PROPERTY",
            data: item
            })
        dispatch(removeVote(item))
    }
}

export const addVoteUserProperty = (itemObject) => {
    return async dispatch => {
        const vote = await voteServices.addVote(itemObject)
        dispatch({
            type: "ADD_VOTE_USER_PROPERTY",
            data: vote
            })
        dispatch(addVote(vote))

    }
}


const voteUserPropertyReducer = (state=[], action) => {
    switch(action.type) {
        case 'CHECK_VOTES_USER_PROPERTY':
            return action.data
        case 'REMOVE_VOTE_USER_PROPERTY':
            const newState = state.filter((item) => item.id !== action.data )
            return newState
        case 'ADD_VOTE_USER_PROPERTY':
            return [
                ...state,
                action.data
              ];
        default:
            return state
    }
}

export default voteUserPropertyReducer