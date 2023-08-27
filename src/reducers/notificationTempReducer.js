// format {message:'bonjour', style:'error'} or style =success
//donner le time voulu en param

//TODO: clearTimeout before launching another one

export const setNotification = (messageInfo) => {
    return async dispatch => {
        dispatch({
            type:'SET_NOTIF',
            data:messageInfo
        })
        setTimeout(() => {
            dispatch({
                type:'HIDE_NOTIF',
                data:null
            })
          }, messageInfo.time)
    }
}

const notificationTempReducer = (state=null, action) => {
    switch (action.type) {
        case "SET_NOTIF":
            return action.data
        case "HIDE_NOTIF":
            return action.data     
        default:
            return state;
    }
}

export default notificationTempReducer