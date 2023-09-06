import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import {
  Routes,
  Route,
} from "react-router-dom"

import './styles/App.css';
import './styles/buttons.css';

import MapOpenGlobal from './components/map/MapOpenGlobal'
import Header from './components/global/Header'
import HowItWorks from './components/home/HowItWorks';
import Projects from './components/project/Projects';
import UserInfo from './components/login/UserInfo';
import LoginForm from './components/login/LoginForm';
import AccountForm from './components/login/AccountForm';
import NotificationTemp from './components/global/NotificationTemp'
import Why from './components/home/Why';

import { getUserInfo } from '../src/reducers/userReducer'

import csrfServices from '../src/services/csrfService'

import Menu from './components/global/Menu';
import ProjectForm from './components/project/ProjectForm';
import SearchForm from './components/map/SearchForm';



// TODO: private groups in property
// TODO: environment var django
// TODO: non logged in, create project ramene à la property sur le détail pour submit
// TODO: non logged in, follow ramene à la property avec notif followed
// TODO: sort options projects : created / most positive voted / not me voted projects
// TODO: share a suggestion
// TODO: report proj
// TODO: Get user data for analytics, country api…
// TODO: add new item > search near in OSM (all radius small) > if none, creaate new / add marker / put marker on click - tbc
// TODO: Language file

// TODO: download all OSM data --> https://planet.openstreetmap.org/
//https://www.geoapify.com/ways-to-get-openstreetmap-data


function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    csrfServices.getCsrfToken()
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

        <Route path='/howitworks' element= { <HowItWorks /> } />

        <Route path='/why' element= { <Why /> } />

        <Route path='/suggestion' element= { <ProjectForm /> } />

        <Route path='/'  element={
          <>
            <SearchForm />
            <Menu />
            <MapOpenGlobal />
          </>
          } />

      </Routes>
      
      <NotificationTemp />
      
    </div>

  );
}

export default App;
