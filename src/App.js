import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {
  Routes,
  Route,
  Link,
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


function App() {
  
  const dispatch = useDispatch()

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
