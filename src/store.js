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

const appReducer = combineReducers({
    mapQuery:mapQueryReducer,
    property:propertyReducer,
    projects:projectReducer,
    choices:choiceReducer,
    notificationTemp: notificationTempReducer,
    user:userReducer,
  })
  
  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_USER') {
      return appReducer(undefined, action)
    }
    return appReducer(state, action)
  }
  
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  
  export default store