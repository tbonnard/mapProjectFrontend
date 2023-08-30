import {combineReducers, applyMiddleware } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

import mapQueryReducer from './reducers/mapQueryReducer'
import propertyReducer from './reducers/propertyReducer';
import projectReducer from './reducers/projectReducer'
import choiceReducer from './reducers/choiceReducer';
import notificationTempReducer from './reducers/notificationTempReducer';
import userReducer from './reducers/userReducer';
import followReducer from './reducers/followReducer';
import loadingReducer from './reducers/loadingReducer';
import boundsReducer from './reducers/boundsReducer';
import userLocationReducer from './reducers/userLocationReducer';
import votePropertyProjectReducer from './reducers/votePropertyProjectReducer'
import voteUserPropertyProjectReducer from './reducers/voteUserPropertyProjectReducer'
import followPropertiesGetProjectsReducer from './reducers/followPropertiesGetProjectsReducer'

const appReducer = combineReducers({
    mapQuery:mapQueryReducer,
    property:propertyReducer,
    projects:projectReducer,
    choices:choiceReducer,
    notificationTemp: notificationTempReducer,
    user:userReducer,
    followedProperties:followReducer,
    loadingFlag : loadingReducer,
    bounds:boundsReducer,
    userLocationFlag:userLocationReducer,
    votePropProj : votePropertyProjectReducer,
    voteUserProperty : voteUserPropertyProjectReducer,
    followPropertiesGetProjects:followPropertiesGetProjectsReducer,
  })
  
  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_USER') {
      return appReducer(undefined, action)
    }
    return appReducer(state, action)
  }
  
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  
  export default store