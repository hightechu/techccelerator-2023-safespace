import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles imports
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// components imports
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import Navigation from "./components/Navigation";
import Resources from "./components/Resources";
import App from './App';
import AddDataSample from './components/AddDataSample';
import Chat from './components/Chat'
import Crisislines from './components/Crisislines'
import Booking from './components/Booking'

const root = ReactDOM.createRoot(document.getElementById('root'));
// Add routes after line 30
root.render(
  <React.StrictMode>
    <BrowserRouter>
        < Navigation />
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/home' element={<UserHome/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/Resources' element={<Resources/>}/>
            <Route path='/adddatasample' element={<AddDataSample/>}/>
            <Route path='/Chat' element={<Chat/>}/>
            <Route path='/Crisislines' element={<Crisislines/>}/>
            <Route path='/Booking' element={<Booking/>}/>

        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

