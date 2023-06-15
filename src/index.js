import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import Nhap from './Component/nhap/Nhap.jsx';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route path='' element={<Home />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='nhap' element={<Nhap />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div >
);