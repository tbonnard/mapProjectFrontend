import choiceServices from '../services/choiceServices'

export const getChoices = () => {
    return async dispatch => {
        const choices = await choiceServices.getChoices()
        dispatch({
            type: "CHOICES",
            data: choices
            })
    }
}

const choiceReducer = (state=[], action) => {
    switch(action.type) {
        case 'CHOICES':
            return action.data
        default:
            return state
    }
}

export default choiceReducer