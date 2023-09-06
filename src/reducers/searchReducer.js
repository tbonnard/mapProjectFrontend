export const setItemToSearch = (item) => {
    return async dispatch => {
        dispatch({
            type: "SEARCH_ITEM",
            data: item
            })
    }
}

const searchReducer = (state='', action) => {
    switch(action.type) {
        case 'SEARCH_ITEM':
            return action.data
        default:
            return state
    }
}

export default searchReducer