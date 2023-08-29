import voteServices from '../services/voteServices'

export const OLDcheckUserVotesAllPropertiesFollowed = (itemObject) => {
    return async dispatch => {
        const votes = await voteServices.checkUserVotesAllPropertiesFollowed(itemObject)
        dispatch({
            type: "OLD_CHECK_VOTES_USER_ALL_PROPERTIES_FOLLOWED",
            data: votes
            })
    }
}

const voteUserAllPropertiesFollowedReducer = (state=[], action) => {
    switch(action.type) {
        case 'OLD_CHECK_VOTES_USER_ALL_PROPERTIES_FOLLOWED':
            return action.data
        default:
            return state
    }
}

export default voteUserAllPropertiesFollowedReducer
