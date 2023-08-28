import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {
  Routes,
  Route,
} from "react-router-dom"

import './styles/App.css';
import './styles/buttons.css';

import MapOpenGlobal from './components/map/MapOpenGlobal'
import Header from './components/global/Header'
import Intro from './components/home/Intro';
import HowItWorks from './components/home/HowItWorks';
import Projects from './components/project/Projects';
import UserInfo from './components/login/UserInfo';
import LoginForm from './components/login/LoginForm';
import AccountForm from './components/login/AccountForm';
import NotificationTemp from './components/global/NotificationTemp'

import { getChoices } from './reducers/choiceReducer';
import { getUserInfo } from '../src/reducers/userReducer'


import csrfServices from '../src/services/csrfService'


// TODO: Feeds of followed places
// TODO: non logged in, create project ramene à la property sur le détail pour submit
// TODO: non logged in, follow ramene à la property avec notif followed
// TODO: vote for projects
// TODO: sort options projects : created / most positive voted / not me voted projects
// TODO: private groups in property
// TODO: share a suggestion
// FIXME: mobile optim map

function App() {
  
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  useEffect(() => {
    csrfServices.getCsrfToken()
    dispatch(getChoices())
    dispatch(getUserInfo())
  },[dispatch])


  return (
    <div className="App">

      <Routes>
      
        <Route path='/property'  element={
            <>
              <Header />
              <Projects />
            </>
            } />

        <Route path='/profile' element= { <UserInfo />  }  />

        <Route path='/login' element= { <LoginForm /> } />

        <Route path='/signup' element= { <AccountForm /> } />

        <Route path='/'  element={
          <>
            <Header />
            <Intro />
            <MapOpenGlobal />
            <HowItWorks />
          </>
          } />

      </Routes>
      
      <NotificationTemp />
      
    </div>

  );
}

export default App;
