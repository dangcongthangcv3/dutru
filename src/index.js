import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css'

import {unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomeTemplate from './Templates/HomeTemplate';
import Nhap from './Component/nhap/Nhap.jsx';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import {store} from './redux/configStore'

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route path='' element={<Home />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='nhap' element={<Nhap />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
    </Provider>
  </div >
);