
export const setLoading = (flag) => {
    return async dispatch => {
        dispatch({
            type: "LOADING",
            data: flag
            })
    }
}

const loadingReducer = (state=false, action) => {
    switch(action.type) {
        case 'LOADING':
            return action.data
        default:
            return state
    }
}

export default loadingReducer