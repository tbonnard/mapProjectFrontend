import userServices from '../services/userServices'


import { setNotification } from './notificationTempReducer'


export const userLogin = (credentials) => {
    return async dispatch => {
        try {
            const user = await userServices.loginUser(credentials)
            document.cookie = `jwtTk=${user.jwt}; Path=/ ; samesite=Lax`
            localStorage.setItem('userMapProjectDetails', JSON.stringify(user.user))
            dispatch({
                    type: "USER_LOGIN",
                    data: user.user
                })
        } catch(exception) {
            dispatch(setNotification({message:'wrong credentials, please try again', style:'error', time:10000}))
        }
    }
}

export const createAccount = (accountObject) => {
    return async dispatch => {
        try {
            const newUser = await userServices.createAccount(accountObject)
            document.cookie = `jwtTk=${newUser.jwt}; Path=/ ; samesite=Lax`
            localStorage.setItem('userMapProjectDetails', JSON.stringify(newUser.user))
            dispatch({
                type: "USER_CREATE_ACCOUNT",
                data: newUser.user
            })
            
            // if (newUser) {
            //     user = await userServices.loginUser({ email:accountObject.email, password:accountObject.password })
            //     userDetails = await userServices.userDetails()
            // }
            // dispatch({
            //     type: "USER_CREATE_ACCOUNT",
            //     data: userDetails
            // })
        } catch(exception) {
            dispatch(setNotification({message:'incorrect username or password (min 4 characters), please try again', style:'error', time:10000}))
        }
    }
}


export const getUserInfo = () =>{
    return async dispatch => {
        let userDetails = null
        if (localStorage.getItem('userMapProjectDetails')) {
            if (document.cookie.replace(/(?:(?:^|.*;\s*)jwtTk\s*=\s*([^;]*).*$)|^.*$/, '$1')) {
                userDetails =localStorage.getItem('userMapProjectDetails')
                const userJsonParsed = JSON.parse(userDetails)
                let userToCheck = await userServices.userDetails(userJsonParsed.id)
                if (userToCheck) {
                    userDetails = userToCheck
                } else {
                    dispatch(logoutUser());
                }        
            } else {
                dispatch(logoutUser());
            } }
        dispatch({
            type: "GET_USER_INFO",
            data: userDetails
        })
    }
}


export const logoutUser = () => {
    return async dispatch => {
        await userServices.logoutUser()
        document.cookie = "jwtTk=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        localStorage.removeItem("userMapProjectDetails")
        dispatch({
            type: "LOGOUT_USER",
            data: null
            })
    }
}


export const expiredToken = () => {
    return async dispatch => {
        dispatch({
            type: "EXPIRED_TOKEN_USER",
            data: null
            })
            dispatch(logoutUser())
            dispatch(setNotification({message:'Your authentication has expired, you must re-login. Thank you !', style:'error', time:10000}))
    }
}


const userReducer = (state=null, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return action.data
        case 'EXPIRED_TOKEN_USER':
            return action.data
        case 'LOGOUT_USER':
            return action.data
        case 'GET_USER_INFO':
            return action.data
        case 'USER_CREATE_ACCOUNT':
            return action.data
        default:
            return state
    }

}

export default userReducer