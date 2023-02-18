import React from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialpogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
// import {BrowserRouter, Route} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>
      <Routes>
				<Route path="/profile" element = {<Profile />}/>
				<Route path="/dialogs" element = {<Dialogs />}/>
			</Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
